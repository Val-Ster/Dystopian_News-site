import { useState } from "react";

function HotlineBanner({ number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <section className="hotline-banner">
      <div>
        <p className="hotline-label">Emergency Hotline</p>
        <div className="hotline-row">
          <h2>{number}</h2>
          <button type="button" className="copy-button" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
      <p className="hotline-copy">
        Call immediately for medical support, shelter breach, or hostile
        encounters.
      </p>
      {copied && <span className="hotline-copied">Number copied!</span>}
    </section>
  );
}

export default HotlineBanner;
