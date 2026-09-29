import { useRef, useState } from "react";
import { CATEGORIES } from "../data/store";
import { money } from "../lib/format";
import { api } from "./api";
import { downloadSample, readProductCSV } from "./csv";

const MAX_BYTES = 4 * 1024 * 1024;
const PREVIEW_LIMIT = 500;
const catName = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.name]));

export default function ImportProducts({ onClose, onImported }) {
  const [step, setStep] = useState("pick");
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [rows, setRows] = useState(null);
  const [report, setReport] = useState(null);
  const [ignored, setIgnored] = useState([]);
  const [filter, setFilter] = useState("all");
  const [drag, setDrag] = useState(false);
  const input = useRef(null);

  const reset = () => {
    setStep("pick");
    setError("");
    setRows(null);
    setReport(null);
    setIgnored([]);
    setFilter("all");
    if (input.current) input.current.value = "";
  };

  const handleFile = async (file) => {
    if (!file) return;
    reset();
    setFileName(file.name);
    if (!/\.csv$/i.test(file.name) && file.type !== "text/csv") return setError("Please choose a .csv file.");
    if (file.size > MAX_BYTES) return setError("File is larger than 4 MB. Please split it into smaller files.");

    const parsed = readProductCSV(await file.text());
    if (parsed.error) return setError(parsed.error);

    setStep("checking");
    try {
      const res = await api("products/import", { method: "POST", body: { dryRun: true, rows: parsed.rows } });
      setRows(parsed.rows);
      setReport(res);
      setIgnored(parsed.ignored);
      setFilter(res.summary.invalid ? "errors" : "all");
      setStep("preview");
    } catch (e) {
      setError(e.message);
      setStep("pick");
    }
  };

  const runImport = async () => {
    setStep("importing");
    setError("");
    try {
      const res = await api("products/import", { method: "POST", body: { rows } });
      onImported(res);
    } catch (e) {
      setError(e.message);
      setStep("preview");
    }
  };

  const s = report?.summary;
  const list = report ? report.rows.filter((r) => (filter === "errors" ? r.errors.length : filter === "valid" ? !r.errors.length : true)) : [];

  return (
    <div className="adm-modal" onMouseDown={(e) => e.target === e.currentTarget && step !== "importing" && onClose()}>
      <div className={`adm-card adm-modal-body${step === "preview" || step === "importing" ? " wide" : ""}`}>
        <div className="adm-modal-head">
          <h3>Import Products from CSV</h3>
          <button type="button" className="adm-x" onClick={onClose} aria-label="Close" disabled={step === "importing"}>
            ×
          </button>
        </div>

        {(step === "pick" || step === "checking") && (
          <>
            <label
              className={`adm-drop${drag ? " drag" : ""}`}
              onDragOver={(e) => (e.preventDefault(), setDrag(true))}
              onDragLeave={() => setDrag(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDrag(false);
                handleFile(e.dataTransfer.files[0]);
              }}
            >
              <input ref={input} type="file" accept=".csv,text/csv" hidden onChange={(e) => handleFile(e.target.files[0])} disabled={step === "checking"} />
              {step === "checking" ? (
                <>
                  <div className="spinner" />
                  <b>Checking {fileName}…</b>
                </>
              ) : (
                <>
                  <span className="adm-drop-icon">⇪</span>
                  <b>Click to choose a CSV file</b>
                  <span className="adm-muted">or drag &amp; drop it here (max 4 MB)</span>
                </>
              )}
            </label>

            <div className="adm-help">
              <p>
                <b>Required columns:</b> name, price, mrp, category, img
              </p>
              <p>
                <b>Optional:</b> id, tag, images (separate multiple URLs with <code>|</code>), desc, rating, reviews, active (yes/no)
              </p>
              <p>
                Leave <code>id</code> empty to <b>create</b> a new product. Put an existing product ID to <b>update</b> it. Category can be the ID
                or the name ({CATEGORIES.map((c) => c.id).join(", ")}).
              </p>
              <button type="button" className="adm-link" onClick={downloadSample}>
                ⤓ Download sample CSV
              </button>
            </div>
          </>
        )}

        {report && (step === "preview" || step === "importing") && (
          <>
            <div className="adm-file-row">
              <span>
                📄 <b>{fileName}</b>
              </span>
              <button type="button" className="adm-link" onClick={reset} disabled={step === "importing"}>
                Choose another file
              </button>
            </div>

            <div className="adm-stats">
              <Stat label="Total rows" value={s.total} />
              <Stat label="New products" value={s.create} tone="blue" />
              <Stat label="Updates" value={s.update} tone="purple" />
              <Stat label="With errors" value={s.invalid} tone={s.invalid ? "red" : ""} />
            </div>

            {ignored.length > 0 && <div className="adm-warn">Unknown column(s) ignored: {ignored.join(", ")}</div>}
            {s.invalid > 0 && (
              <div className="adm-warn">
                {s.invalid} row(s) have errors and will be <b>skipped</b>. Fix them in the file and re-upload, or import only the valid rows.
              </div>
            )}

            <div className="adm-seg">
              {[
                ["all", `All (${s.total})`],
                ["errors", `Errors (${s.invalid})`],
                ["valid", `Valid (${s.valid})`],
              ].map(([k, label]) => (
                <button key={k} type="button" className={filter === k ? "active" : ""} onClick={() => setFilter(k)}>
                  {label}
                </button>
              ))}
            </div>

            <div className="adm-table-wrap adm-preview">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Row</th>
                    <th>Action</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>MRP</th>
                    <th>Category</th>
                    <th>Active</th>
                    <th>Issues</th>
                  </tr>
                </thead>
                <tbody>
                  {list.slice(0, PREVIEW_LIMIT).map((r) => (
                    <tr key={r.row} className={r.errors.length ? "adm-row-bad" : ""}>
                      <td className="adm-muted">{r.row}</td>
                      <td>
                        <span className={`adm-pill ${r.errors.length ? "bad" : r.action}`}>
                          {r.errors.length ? "Skip" : r.action === "update" ? `Update #${r.id}` : "Create"}
                        </span>
                      </td>
                      <td>
                        <div className="adm-prod">
                          {r.img ? <img src={r.img} alt="" loading="lazy" /> : <span className="adm-noimg" />}
                          <b>{r.name || <i className="adm-muted">(no name)</i>}</b>
                        </div>
                      </td>
                      <td>{typeof r.price === "number" ? money(r.price) : r.price}</td>
                      <td>{typeof r.mrp === "number" ? money(r.mrp) : r.mrp}</td>
                      <td>{catName[r.category] || r.category}</td>
                      <td>{r.isActive == null ? "—" : r.isActive ? "Yes" : "No"}</td>
                      <td>
                        {r.errors.length ? (
                          <ul className="adm-errs">
                            {r.errors.map((e) => (
                              <li key={e}>{e}</li>
                            ))}
                          </ul>
                        ) : (
                          <span className="adm-ok">✓ OK</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  {!list.length && (
                    <tr>
                      <td colSpan={8} className="adm-empty">
                        Nothing to show
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {list.length > PREVIEW_LIMIT && <p className="adm-muted">Showing first {PREVIEW_LIMIT} of {list.length} rows.</p>}
          </>
        )}

        {error && <div className="adm-error">{error}</div>}

        <div className="adm-modal-foot">
          <button type="button" className="adm-btn ghost" onClick={onClose} disabled={step === "importing"}>
            Cancel
          </button>
          {report && (step === "preview" || step === "importing") && (
            <button type="button" className="adm-btn primary" onClick={runImport} disabled={!s.valid || step === "importing"}>
              {step === "importing" ? "Importing…" : s.invalid ? `Import ${s.valid} valid row(s)` : `Import ${s.valid} product(s)`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, tone = "" }) {
  return (
    <div className={`adm-stat ${tone}`}>
      <b>{value}</b>
      <span>{label}</span>
    </div>
  );
}
