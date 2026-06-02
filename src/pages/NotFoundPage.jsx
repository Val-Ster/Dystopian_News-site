import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFoundPage({ title, message }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="article-shell">
      <section className="article-missing reveal" data-reveal>
        <h2>{title ?? "Dispatch not found"}</h2>
        <p>{message ?? "The dispatch you requested cannot be found."}</p>
        <Link className="back-link" to="/">
          Return to newsroom
        </Link>
      </section>
    </div>
  );
}
