import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import monsters from "../monsterData.js";

export default function MonsterDetailPage() {
  const { monsterId } = useParams();
  const monster = monsters.find((m) => m.id === monsterId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [monsterId]);

  if (!monster) {
    return (
      <div className="article-shell">
        <section className="article-missing revealed">
          <h2>Threat Profile Not Found</h2>
          <p>The threat profile you sought does not exist in the archive.</p>
          <Link to="/insights" className="read-more">
            Back to Registry
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="article-shell">
      <section className="article-banner revealed">
        <img
          src={`${import.meta.env.BASE_URL}monsters/${monster.image}`}
          alt={monster.name}
        />
        <div className="article-overlay">
          <span className="eyebrow">{monster.role}</span>
          <h1>{monster.name}</h1>
          <p>{monster.description}</p>
        </div>
      </section>

      <main className="content-grid">
        <section className="news-feed">
          <Link to="/insights" className="back-link">
            ← Back to Registry
          </Link>

          {/* Single banner image is displayed above; no extra small views needed */}

          <div className="detail-dossier revealed">
            <h2>Full Threat Profile</h2>
            <p>{monster.description}</p>

            <div className="threat-section">
              <h3>Weaknesses</h3>
              <p className="threat-content">{monster.weakness}</p>
            </div>

            <div className="threat-section">
              <h3>Strengths</h3>
              <p className="threat-content">{monster.strength}</p>
            </div>

            <div className="threat-section">
              <h3>Tactical Notes</h3>
              <p className="threat-content">
                When engaging this threat, prioritize the weak points identified
                above. Coordinate with other survivors and ensure you have the
                proper equipment before pursuit.
              </p>
            </div>
          </div>
        </section>

        <aside className="side-panel revealed">
          <div className="panel-block">
            <h3>Registry Entry</h3>
            <p>
              This threat profile has been compiled from field reports and
              survivor testimonies. Keep this data close when planning your
              route.
            </p>
          </div>
          <div className="panel-block">
            <h3>{monster.role}</h3>
            <p>Classification: {monster.role} </p>
            <p>
              <br />,
              <h3>Field Notes</h3>
              <li>S rank – a full platoon with high artillery</li>
              <li>A rank – a squad with high artillery</li>
              <li>B rank – two to three members with high artillery</li>
              <li>
                C rank – two to three members with low artillery or one
                individual with high artillery
              </li>
              <li>D rank – one member with low artillery</li>
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
