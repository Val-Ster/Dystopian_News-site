import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import HotlineBanner from "../components/HotlineBanner.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { newsItems } from "../newsData.js";
import useRevealOnScroll from "../hooks/useRevealOnScroll.jsx";

export default function ArticlePage() {
  useRevealOnScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const article = newsItems.find((item) => item.id === Number(id));

  if (!article || article.missing) {
    return (
      <NotFoundPage
        title="Dispatch not found"
        message="The story you were looking for has gone dark. Return to the newsroom and try another signal."
      />
    );
  }

  return (
    <div className="article-shell">
      <div className="article-banner reveal" data-reveal>
        <img
          src={`${import.meta.env.BASE_URL}${article.image}`}
          alt={article.title}
        />
        <div className="article-overlay">
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
          <div className="article-meta">
            <span>{article.time}</span>
            <Link className="back-link" to="/">
              Return to newsroom
            </Link>
          </div>
        </div>
      </div>

      <main className="article-content">
        <section className="article-body reveal" data-reveal>
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <aside className="article-aside reveal" data-reveal>
          <div className="panel-block">
            <h3>Field advisory</h3>
            <p>
              Stay low, travel with a charged beacon, and keep the hotline
              number memorized. If you lose the feed, move perpendicular to
              known patrol routes.
            </p>
          </div>
          <div className="panel-block">
            <h3>Recent alerts</h3>
            <ul>
              <li>Sector 5 blackout continuing.</li>
              <li>Water ration maps updated.</li>
              <li>Emergency hotline open 24/7.</li>
            </ul>
          </div>
        </aside>
      </main>

      <HotlineBanner number="+7 (9889) 576-DYS07" />
    </div>
  );
}
