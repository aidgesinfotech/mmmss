import { useEffect, useMemo, useState } from "react";
import { useToast } from "../context/toast";
import { CATEGORIES } from "../data/store";
import { money } from "../lib/format";
import { api } from "./api";
import { downloadProducts, downloadSample } from "./csv";
import ImportProducts from "./ImportProducts";

const EMPTY = { name: "", price: "", mrp: "", category: CATEGORIES[0].id, tag: "", img: "", images: "", desc: "", rating: "4.0", reviews: "0", isActive: true };
const catName = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.name]));

export default function Products() {
  const toast = useToast();
  const [products, setProducts] = useState(null);
  const [error, setError] = useState("");
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");
  const [editing, setEditing] = useState(null);
  const [importing, setImporting] = useState(false);
  const [seeding, setSeeding] = useState(false);

  const load = () =>
    api("products")
      .then((d) => setProducts(d.products))
      .catch((e) => setError(e.message));

  useEffect(() => {
    load();
  }, []);

  const imported = async (res) => {
    setImporting(false);
    await load();
    toast(`Imported ${res.imported} product(s)${res.skipped ? `, skipped ${res.skipped} with errors` : ""}`);
  };

  const seedDefaults = async () => {
    if (
      !window.confirm(
        `This will DELETE all current products and reload the default catalog (${products?.length ?? 0} products will be removed).\n\nContinue?`
      )
    )
      return;
    setSeeding(true);
    try {
      const d = await api("seed", { method: "POST" });
      setProducts(d.products);
      toast(`✓ Loaded ${d.seeded} default products`);
    } catch (e) {
      toast(e.message);
    } finally {
      setSeeding(false);
    }
  };

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    return (products || []).filter((p) => (!cat || p.category === cat) && (!term || p.name.toLowerCase().includes(term) || String(p.id) === term));
  }, [products, q, cat]);

  const saved = (p, isNew) => {
    setProducts((list) => (isNew ? [p, ...list] : list.map((x) => (x.id === p.id ? p : x))));
    setEditing(null);
    toast(isNew ? "Product added" : "Product updated");
  };

  const remove = async (p) => {
    if (!window.confirm(`Delete "${p.name}"? This cannot be undone.`)) return;
    try {
      await api(`products/${p.id}`, { method: "DELETE" });
      setProducts((list) => list.filter((x) => x.id !== p.id));
      toast("Product deleted");
    } catch (e) {
      toast(e.message);
    }
  };

  if (error) return <div className="adm-error">{error}</div>;
  if (!products) return <div className="adm-center small"><div className="spinner" /></div>;

  return (
    <>
      <div className="adm-toolbar">
        <h2>
          Products <span className="adm-muted">({shown.length}/{products.length})</span>
        </h2>
        <div className="adm-toolbar-right">
          <input className="adm-input" placeholder="Search name or ID…" value={q} onChange={(e) => setQ(e.target.value)} />
          <select className="adm-input" value={cat} onChange={(e) => setCat(e.target.value)}>
            <option value="">All categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <button type="button" className="adm-btn primary" onClick={() => setEditing(EMPTY)}>
            + Add Product
          </button>
        </div>
      </div>

      <div className="adm-csv-bar">
        <span className="adm-muted">CSV:</span>
        <button type="button" className="adm-btn small" onClick={() => setImporting(true)}>
          ⇪ Import CSV
        </button>
        <button type="button" className="adm-btn small" onClick={() => downloadProducts(products)} disabled={!products.length}>
          ⤓ Export CSV ({products.length})
        </button>
        <button type="button" className="adm-btn small ghost" onClick={downloadSample}>
          Sample CSV
        </button>
        <button type="button" className="adm-btn small danger" onClick={seedDefaults} disabled={seeding}>
          {seeding ? "Loading…" : "↺ Load Default Products"}
        </button>
      </div>

      <div className="adm-card adm-table-wrap">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>MRP</th>
              <th>Rating</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {shown.map((p) => (
              <tr key={p.id}>
                <td>
                  <div className="adm-prod">
                    <img src={p.img} alt="" loading="lazy" />
                    <div>
                      <b>{p.name}</b>
                      <span className="adm-muted">#{p.id}{p.tag ? ` · ${p.tag}` : ""}</span>
                    </div>
                  </div>
                </td>
                <td>{catName[p.category] || p.category}</td>
                <td>{money(p.price)}</td>
                <td className="adm-muted">{money(p.mrp)}</td>
                <td>
                  {p.rating} ★ <span className="adm-muted">({p.reviews})</span>
                </td>
                <td>
                  <span className={`adm-pill${p.isActive ? " on" : ""}`}>{p.isActive ? "Active" : "Hidden"}</span>
                </td>
                <td className="adm-actions">
                  <button type="button" className="adm-btn small" onClick={() => setEditing(p)}>
                    Edit
                  </button>
                  <button type="button" className="adm-btn small danger" onClick={() => remove(p)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {!shown.length && (
              <tr>
                <td colSpan={7} className="adm-empty">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editing && <ProductForm product={editing} onClose={() => setEditing(null)} onSaved={saved} />}
      {importing && <ImportProducts onClose={() => setImporting(false)} onImported={imported} />}
    </>
  );
}

function ProductForm({ product, onClose, onSaved }) {
  const isNew = !product.id;
  const [f, setF] = useState(() =>
    isNew ? EMPTY : { ...product, price: String(product.price), mrp: String(product.mrp), rating: String(product.rating), reviews: String(product.reviews), images: product.images.join("\n") }
  );
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const d = await api(isNew ? "products" : `products/${product.id}`, { method: isNew ? "POST" : "PUT", body: f });
      onSaved(d.product, isNew);
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  };

  return (
    <div className="adm-modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <form className="adm-card adm-modal-body" onSubmit={submit}>
        <div className="adm-modal-head">
          <h3>{isNew ? "Add Product" : `Edit Product #${product.id}`}</h3>
          <button type="button" className="adm-x" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="adm-grid">
          <label className="adm-field span-2">
            <span>Name *</span>
            <input value={f.name} onChange={set("name")} required maxLength={255} />
          </label>
          <label className="adm-field">
            <span>Selling Price (₹) *</span>
            <input type="number" min="1" value={f.price} onChange={set("price")} required />
          </label>
          <label className="adm-field">
            <span>MRP (₹) *</span>
            <input type="number" min="1" value={f.mrp} onChange={set("mrp")} required />
          </label>
          <label className="adm-field">
            <span>Category *</span>
            <select value={f.category} onChange={set("category")}>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <label className="adm-field">
            <span>Tag</span>
            <input value={f.tag} onChange={set("tag")} maxLength={50} placeholder="e.g. Trending" />
          </label>
          <label className="adm-field span-2">
            <span>Main Image URL *</span>
            <div className="adm-img-row">
              <input value={f.img} onChange={set("img")} required placeholder="https://…" />
              {f.img && <img src={f.img} alt="" />}
            </div>
          </label>
          <label className="adm-field span-2">
            <span>Gallery Image URLs (one per line)</span>
            <textarea rows={3} value={f.images} onChange={set("images")} placeholder={"https://…/1.jpg\nhttps://…/2.jpg"} />
          </label>
          <label className="adm-field span-2">
            <span>Description</span>
            <textarea rows={3} value={f.desc} onChange={set("desc")} />
          </label>
          <label className="adm-field">
            <span>Rating (0-5)</span>
            <input type="number" min="0" max="5" step="0.1" value={f.rating} onChange={set("rating")} />
          </label>
          <label className="adm-field">
            <span>Reviews count</span>
            <input type="number" min="0" value={f.reviews} onChange={set("reviews")} />
          </label>
          <label className="adm-check span-2">
            <input type="checkbox" checked={f.isActive} onChange={set("isActive")} />
            <span>Active (visible in store)</span>
          </label>
        </div>

        {error && <div className="adm-error">{error}</div>}
        <div className="adm-modal-foot">
          <button type="button" className="adm-btn ghost" onClick={onClose}>
            Cancel
          </button>
          <button className="adm-btn primary" disabled={busy}>
            {busy ? "Saving…" : isNew ? "Add Product" : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
