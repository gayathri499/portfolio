import { about } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal className="section-head">
        <h2 className="section-title">About</h2>
        <span className="section-index">01</span>
      </Reveal>

      <div className="about__grid">
        <Reveal as="p" className="about__lede" delay={0}>
          A final-year AI &amp; Data Science student who learns primarily by
          building — from RAG-based applications to the interfaces around
          them.
        </Reveal>
        <div className="about__body">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} as="p" delay={100 + i * 90}>
              {p}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
