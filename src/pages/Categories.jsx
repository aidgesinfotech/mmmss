import { useRef } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Page from "../components/Page";
import ProductCard from "../components/ProductCard";
import { CATEGORY_MENU } from "../data/categoryMenu";
import { allCategories, findMenuItem, groupIcon, isImage, itemImage, itemLink, productsFor } from "../lib/catalog";

export default function Categories() {
  const { id } = useParams();
  return id ? <CategoryProducts id={id} /> : <CategoryMenu />;
}

function CategoryMenu() {
  const [params, setParams] = useSearchParams();
  const allGroup = { id: "all", name: "All Categories", sections: [{ title: "All Categories", items: allCategories() }] };
  const groups = [allGroup, ...CATEGORY_MENU];
  const group = groups.find((g) => g.id === params.get("group")) || allGroup;

  const main = useRef(null);

  const select = (g) => {
    setParams(g.id === allGroup.id ? {} : { group: g.id }, { replace: true });
    main.current?.scrollTo(0, 0);
  };

  return (
    <Page docTitle="Categories" header={{ back: true, close: true }}>
      <div className="catx">
        <nav className="catx-side" aria-label="Category groups">
          {groups.map((g) => {
            const icon = groupIcon(g);
            return (
              <button key={g.id} type="button" className={`catx-tab${g.id === group.id ? " active" : ""}`} onClick={() => select(g)}>
                <span className="catx-tab-icon">{isImage(icon) ? <img src={icon} alt="" loading="lazy" /> : icon}</span>
                <span className="catx-tab-name">{g.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="catx-main" ref={main}>
          <div className="catx-group-label">
            <span>{group.name}</span>
          </div>
          {group.sections.map((s) => (
            <section key={s.title} className="catx-section">
              <h3>{s.title}</h3>
              <div className="catx-grid">
                {s.items.map((it) => (
                  <Link key={it.id} to={itemLink(it)} className="catx-item">
                    <span className="catx-img">
                      <img src={itemImage(it)} alt="" loading="lazy" />
                      {it.badge && <span className="catx-badge">{it.badge}</span>}
                    </span>
                    <span className="catx-name">{it.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Page>
  );
}

function CategoryProducts({ id }) {
  const item = findMenuItem(id);
  const items = item ? productsFor(item) : [];
  const name = item?.name ?? "Category";

  return (
    <Page docTitle={name} header={{ title: name, back: true }}>
      <h2 className="page-heading">
        {name} <span className="muted">({items.length})</span>
      </h2>
      <section className="products">
        {items.length ? (
          <div className="product-list">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="muted center pad">No products in this category yet.</p>
        )}
      </section>
    </Page>
  );
}
