import { certifications } from "../data/content";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <Reveal className="section-head">
        <h2 className="section-title">Certifications</h2>
        <span className="section-index">06</span>
      </Reveal>

      <div className="certs__grid">
        <Reveal delay={0}>
          <span className="certs__col-label">Coursera</span>
          <div className="certs__list">
            {certifications.coursera.map((c) => (
              <div key={c.name} className="certs__row">
                <span className="certs__row-name">{c.name}</span>
                <span className="certs__row-track">{c.track}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="certs__col-label">NPTEL</span>
          <div className="certs__list">
            {certifications.nptel.map((name) => (
              <div key={name} className="certs__row">
                <span className="certs__row-name">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
