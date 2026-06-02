import { Link } from "react-router-dom";

function NewsCard({ news }) {
  const url = news.link ?? `/article/${news.id}`;

  return (
    <article className="news-card reveal" data-reveal>
      <div className="card-header">
        <span className="tag">{news.category}</span>
        <span className="timestamp">{news.time}</span>
      </div>
      <h3>{news.title}</h3>
      <p>{news.summary}</p>
      <Link to={url} className="read-more">
        View dispatch
      </Link>
    </article>
  );
}

export default NewsCard;
