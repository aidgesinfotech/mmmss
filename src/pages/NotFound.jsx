import { Link } from "react-router-dom";
import Page from "../components/Page";

export default function NotFound() {
  return (
    <Page docTitle="Page not found" header={{ back: true }}>
      <div className="empty">
        <p>Page not found</p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </Page>
  );
}
