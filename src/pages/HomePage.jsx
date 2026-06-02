import { useMemo, useEffect, useState } from "react";
import HotlineBanner from "../components/HotlineBanner.jsx";
import NewsCard from "../components/NewsCard.jsx";
import UrgentNewsButton from "../components/UrgentNewsButton.jsx";
import { newsItems } from "../newsData.js";
import useRevealOnScroll from "../hooks/useRevealOnScroll.jsx";

export default function HomePage() {
  const [showUrgent, setShowUrgent] = useState(false);
  useRevealOnScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const timeline = useMemo(
    () => [...newsItems].sort((a, b) => b.id - a.id),
    [],
  );

  useEffect(() => {
    const handleScroll = () => setShowUrgent(window.scrollY > 220);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-shell">
      <UrgentNewsButton visible={showUrgent} />
      <header className="hero-panel reveal" data-reveal>
        <div>
          <span className="eyebrow">Dystopian Newsroom</span>
          <h1>Signal. Survival. Story.</h1>
          <p>
            Navigate the new world with urgent dispatches, live emergency
            alerts, and a hotline that stays online when everything else goes
            dark.
          </p>
        </div>
        <div className="hero-meta">
          <strong>Signal status 🛜</strong>
          <p>
            Intermittent. [Use fortified comms and keep your eyes on the feed]
          </p>
        </div>
      </header>

      <HotlineBanner number="+7 (9889) 576-DYS07" />

      <main className="content-grid">
        <section className="news-feed">
          <div className="section-heading reveal" data-reveal>
            <h2>Latest Dispatches</h2>
            <p>
              Fast, clear updates from survivors, patrols, and the remnant
              council.
            </p>
          </div>

          <div className="cards-grid">
            {timeline.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        </section>

        <aside className="side-panel reveal" data-reveal>
          <div className="panel-block">
            <h3>Survivor Alert</h3>
            <p>
              Keep your gas mask charged and avoid the northern highway at dusk.
              Patrol drones are rerouting to the wasteland perimeter.
            </p>
          </div>
          <div className="panel-block">
            <h3>Emergency Planning</h3>
            <p>
              Bookmark the hotline, share the route map, and gather spare
              batteries for night watch. Every small preparation saves lives.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
