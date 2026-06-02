import { Link } from "react-router-dom";

export default function UrgentNewsButton({ visible }) {
  return (
    <Link
      to="/urgent-news"
      className={`urgent-button ${visible ? "visible" : ""}`}
    >
      <span>Urgent News</span>
      <small>Watch emergency update</small>
    </Link>
  );
}
