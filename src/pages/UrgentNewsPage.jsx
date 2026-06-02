import { Link } from "react-router-dom";
import { useEffect } from "react";
import HotlineBanner from "../components/HotlineBanner.jsx";
import useRevealOnScroll from "../hooks/useRevealOnScroll.jsx";

export default function UrgentNewsPage() {
  useRevealOnScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="article-shell">
      <section className="urgent-video-banner reveal" data-reveal>
        <div className="urgent-headline">
          <span className="eyebrow">Urgent News</span>
          <h1>Live Emergency Broadcast</h1>
          <p>
            This feed will contain the latest survival instructions and
            situational updates.
          </p>
        </div>
        <Link className="back-link" to="/">
          Return to newsroom
        </Link>
      </section>

      <main className="urgent-video-content">
        <section className="video-card reveal" data-reveal>
          <video controls className="urgent-video" poster="/urgent_news.mp4">
            <source src="/urgent_news.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-copy">
            <h2>Urgent Broadcast</h2>
            <p>
              This video contains critical information for survivors. Please
              watch carefully and follow the instructions provided.
              <br />
              Military analysts have confirmed that these creatures track
              movement. They are drawn to human activity above ground;
              footsteps, vibrations, heat signatures, and sound. Every time a
              scavenger ventures outside, they risk leading a pack of monsters
              directly back to their camp. You may think your run is quick. You
              may think you are careful. But one trip outside could bring an
              entire horde to your location, putting not just yourself, but
              every man, woman, and child sheltering with you in fatal danger.
              Do NOT go outside unless it is a life or death emergency. Secure
              your perimeters. Keep noise to an absolute minimum. And under no
              circumstances — travel alone.
            </p>
          </div>
        </section>

        <aside className="article-aside reveal" data-reveal>
          <div className="panel-block">
            <h3>Video briefing</h3>
            <p>
              Ensure the stream is connected before sending teams. Quiet zones
              and encrypted channels are recommended.
            </p>
          </div>
          <div className="panel-block">
            <h3>Field note</h3>
            <p>
              Only click the urgent video if you are within reach of the comm
              relay. This update is for high-priority survivors. Everyone else
              should stay put and wait for further instructions.
            </p>
          </div>
        </aside>
      </main>

      <HotlineBanner number="+7 (9889) 576-DYS07" />
    </div>
  );
}
