import { careerFocus } from "../data/content";
import Reveal from "./Reveal";

export default function CareerFocus() {
  return (
    <section id="career-focus" className="section section--tight">
      <Reveal className="section-head">
        <h2 className="section-title">Career focus</h2>
        <span className="section-index">03</span>
      </Reveal>

      <div className="focus__grid">
        <Reveal className="focus-card focus-card--primary" delay={0}>
          <span className="focus-card__label">Primary</span>
          <ul>
            {careerFocus.primary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="focus-card" delay={100}>
          <span className="focus-card__label">Also open to</span>
          <ul>
            {careerFocus.secondary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="p" className="focus-note" delay={180}>
          {careerFocus.note}
        </Reveal>
      </div>
    </section>
  );
}
