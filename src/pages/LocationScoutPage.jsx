import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useRevealOnScroll from "../hooks/useRevealOnScroll.jsx";


const zones = [
  {
    name: "Sector Seven Shelter",
    distance: "3.2 km",
    status: "Open",
    note: "Low patrol movement, safe for night arrivals.",
  },
  {
    name: "Windfall Encampment",
    distance: "5.8 km",
    status: "Restricted",
    note: "Caution: drone sweep at dawn.",
  },
  {
    name: "Old Transit Hub",
    distance: "9.1 km",
    status: "Evacuated",
    note: "Supplies available, power unstable.",
  },
  {
    name: "Ridgeview Refuge",
    distance: "11.4 km",
    status: "Open",
    note: "Water purification systems online, watch for stray patrols.",
  },
  {
    name: "Catacomb Outpost",
    distance: "14.7 km",
    status: "Quarantined",
    note: "Hostile bio-signatures detected around the perimeter.",
  },
  {
    name: "Phoenix Waypoint",
    distance: "18.3 km",
    status: "Standby",
    note: "Awaiting convoy clearance. Keep comms quiet.",
  },
];

export default function LocationScoutPage() {
  useRevealOnScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [scanState, setScanState] = useState({
    youDistance: 0.0,
    companionDistance: 5.5,
    threats: [
      {
        key: "twilight",
        label: " (Twilight Stalker)",
        range: 3.6,
        status: "Closing",
        position: { top: 16, left: 80 },
      },
      {
        key: "ruin",
        label: " (Ruin Crawler)",
        range: 5.4,
        status: "Closing",
        position: { top: 72, left: 22 },
      },
      {
        key: "veil",
        label: " (Veil Warden)",
        range: 8.2,
        status: "Circling",
        position: { top: 24, left: 30 },
      },
    ],
  });

  useRevealOnScroll();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setScanState((prev) => ({
        ...prev,
        companionDistance: Number(
          Math.min(11.5, prev.companionDistance + 0.08).toFixed(1),
        ),
        threats: prev.threats.map((threat) => ({
          ...threat,
          range: Number(
            Math.max(
              0.4,
              threat.range -
                (threat.key === "twilight"
                  ? 0.18
                  : threat.key === "ruin"
                    ? 0.11
                    : 0.07),
            ).toFixed(1),
          ),
          status:
            threat.key === "veil"
              ? "Circling"
              : threat.range <= 1.2
                ? "Immediate"
                : "Closing",
        })),
      }));
    }, 1200);

    return () => window.clearInterval(interval);
  }, []);

  const scanItems = [
    {
      label: "You",
      description: "(This Phone)",
      range: `${scanState.youDistance.toFixed(1)} km`,
      status: "Present",
      type: "human-you",
    },
    {
      label: "Human",
      description: " (plausible companion)",
      range: `${scanState.companionDistance.toFixed(1)} km`,
      status: "Moving away",
      type: "human-blue",
    },
    ...scanState.threats.map((threat) => ({
      label: "Threat",
      description: threat.label,
      range: `${threat.range.toFixed(1)} km`,
      status: threat.status,
      type: "threat-red",
      key: threat.key,
    })),
  ];

  const getDotStyle = (range, top, left) => {
    const clamped = Math.min(Math.max(range, 0.4), 12);
    const factor = (12 - clamped) / 12;
    const center = { top: 50, left: 50 };
    return {
      top: `${top + (center.top - top) * factor}%`,
      left: `${left + (center.left - left) * factor}%`,
    };
  };

  return (
    <div className="article-shell">
      <section className="location-shell reveal" data-reveal>
        <div className="hero-meta">
          <strong>Location Scout</strong>
          <p>
            Track refugee zones and nearby monster activity. Use this map to
            find shelter and stay ahead of hostile presence.
          </p>
          <Link to="/" className="read-more">
            Back to Newsroom
          </Link>
        </div>
      </section>

      <main className="content-grid">
        <section className="news-feed">
          <div className="section-heading reveal" data-reveal>
            <h2>Refugee Zones Nearby</h2>
            <p>Confirmed shelter points and supply hubs within range.</p>
            <p>
              <strong>Scanning for all nearby locations...</strong>
            </p>
          </div>
          <div className="cards-grid">
            {zones.map((zone) => (
              <article key={zone.name} className="news-card reveal" data-reveal>
                <div className="card-header">
                  <span className="tag">{zone.status}</span>
                  <span>{zone.distance}</span>
                </div>
                <h3>{zone.name}</h3>
                <p>{zone.note}</p>
              </article>
            ))}
          </div>
        </section>

        <aside className="side-panel reveal" data-reveal>
          <div className="panel-block">
            <h3>PLEASE NOTE THAT LIVE MAPS WILL BE ADDED SOON AS REQUESTED BY SCAVENGERS...</h3>
            <h3>
              <br /> Live Detection Console:</h3>
            <p>
              Sensor nodes are streaming heat signatures, movement pulses, and
              proximity alerts. Red dots indicate the closest active threats.
            </p>
          </div>
          <div className="panel-block detection-panel">
            <div className="scanner-header">
              <span>Active Scan</span>
              <strong>Signal stable</strong>
            </div>
            <div className="scanner-map">
              <div className="scanner-grid" />
              <div
                className="scanner-dot dot-you"
                style={{ top: "50%", left: "50%" }}
              />
              <div
                className="scanner-dot dot-human-blue"
                style={getDotStyle(scanState.companionDistance, 28, 18)}
              />
              {scanState.threats.map((threat) => (
                <div
                  key={threat.key}
                  className="scanner-dot dot-threat"
                  style={getDotStyle(
                    threat.range,
                    threat.position.top,
                    threat.position.left,
                  )}
                />
              ))}
            </div>
            <div className="detection-list">
              {scanItems.map((item, index) => (
                <div
                  key={`${item.type}-${item.key || index}`}
                  className="detection-row"
                >
                  <span className={`detection-label ${item.type}`}>
                    {item.label} {item.description}
                  </span>
                  <span>{item.range}</span>
                  <strong>{item.status}</strong>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
