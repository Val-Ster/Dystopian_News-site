import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import monsters from "../monsterData.js";

export default function InsightPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredMonsters = useMemo(() => {
    if (!searchTerm.trim()) return monsters;
    const lower = searchTerm.toLowerCase();
    return monsters.filter((monster) =>
      [
        monster.name,
        monster.role,
        monster.description,
        monster.weakness,
        monster.strength,
      ].some((value) => value.toLowerCase().includes(lower)),
    );
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(query);
  };

  const clearSearch = () => {
    setQuery("");
    setSearchTerm("");
  };

  return (
    <div className="article-shell">
      <section className="hero-panel revealed">
        <div>
          <span className="eyebrow">Insight Archive</span>
          <h1>Monster Registry</h1>
          <p>
            Detailed discovery files for every known threat. Search the archive
            to learn strengths, weaknesses, and the best way to survive their
            first encounter.
          </p>
        </div>
        <div className="hero-meta">
          <strong>Recorded discoveries</strong>
          <p>12 creatures catalogued. Use the search to narrow the field.</p>
          <Link to="/location-scout" className="read-more">
            Back to Scout
          </Link>
        </div>
      </section>

      <main className="content-grid">
        <section className="news-feed">
          <div className="section-heading revealed">
            <h2>Monster Dossiers</h2>
            <p>
              Tap any entry for a full threat profile and tactical breakdown.
            </p>
          </div>

          <form className="insight-search revealed" onSubmit={handleSearch}>
            <label htmlFor="monster-search">Search monsters</label>
            <div className="search-row">
              <input
                id="monster-search"
                type="search"
                placeholder="Search by name, weakness, or strength"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <button type="submit">Search</button>
              <button
                type="button"
                className="clear-button"
                onClick={clearSearch}
              >
                Clear
              </button>
            </div>
          </form>

          <div className="insight-grid revealed">
            {filteredMonsters.length > 0 ? (
              filteredMonsters.map((monster) => (
                <article
                  key={monster.id}
                  className="monster-card"
                  onClick={() => navigate(`/insights/${monster.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="monster-card-top">
                    <span className="tag">{monster.role}</span>
                    <strong>{monster.name}</strong>
                  </div>
                  <div className="monster-views">
                    <div className="monster-view main-view">
                      <img
                        src={`/monsters/${monster.image}`}
                        alt={monster.name}
                      />
                    </div>
                  </div>
                  <div className="monster-meta">
                    <p>{monster.description}</p>
                    <div className="monster-detail">
                      <span>Weakness</span>
                      <strong>{monster.weakness}</strong>
                    </div>
                    <div className="monster-detail">
                      <span>Strength</span>
                      <strong>{monster.strength}</strong>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-results">
                No monsters matched your search. Try a different name or
                keyword.
              </div>
            )}
          </div>
        </section>

        <aside className="side-panel">
          <div className="panel-block">
            <h3>Field notes</h3>
            <ul>
              <li>S rank – a full platoon with high artillery</li>
              <li>A rank – a squad with high artillery</li>
              <li>B rank – two to three members with high artillery</li>
              <li>
                C rank – two to three members with low artillery or one
                individual with high artillery
              </li>
              <li>D rank – one member with low artillery</li>
            </ul>
          </div>
          <div className="panel-block">
            <h3>Monster Registry Notes</h3>
            <p>
              This archive is updated with the latest sightings and threat
              reports. Use this page to plan your route and prepare the right
              countermeasures.
            </p>
          </div>
          <div className="panel-block">
            <h3>Filter tips</h3>
            <ul>
              <li>Search by full or partial monster name.</li>
              <li>Try keywords like "flare", "armor", or "venom".</li>
              <li>Clear the search to review all available dossiers.</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
