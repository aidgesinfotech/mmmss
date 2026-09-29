import { useEffect } from "react";
import { STORE } from "../data/store";
import BottomNav from "./BottomNav";
import Header from "./Header";

// Phone-width app shell shared by every screen.
export default function Page({ docTitle, header = {}, nav = true, bar, children }) {
  useEffect(() => {
    document.title = docTitle ? `${docTitle} | ${STORE.name}` : `${STORE.name} - Mega Sale`;
  }, [docTitle]);

  return (
    <>
      <div className={`app${bar ? " has-bar" : ""}`}>
        <Header {...header} />
        {children}
        {nav && !bar && <BottomNav />}
      </div>
      {bar && <div className={`bottom-bar${bar.split ? " split" : ""}`}>{bar.content}</div>}
    </>
  );
}
