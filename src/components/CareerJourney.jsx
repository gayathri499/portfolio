import { careerJourney } from "../data/content";
import Reveal from "./Reveal";

export default function CareerJourney() {
  return (
    <section id="journey" className="journey">
      <div className="section">
        <Reveal className="section-head section-head--dark">
          <h2 className="section-title">Career journey</h2>
          <span className="section-index section-index--dark">07</span>
        </Reveal>

        <div className="journey__intro">
          <Reveal delay={0}>
            <span className="journey__block-label">What I'm optimising for, as a fresher</span>
            <ul className="journey__priorities">
              {careerJourney.priorities.map((p, i) => (
                <li key={p}>
                  {i + 1}. {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <span className="journey__block-label">Currently developing</span>
            <ul className="journey__growth">
              {careerJourney.growthAreas.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <span className="journey__block-label">My plan to get there</span>
        <div className="journey__path">
          {careerJourney.actionPlan.map((stage, i) => (
            <Reveal key={stage.stage} className="journey__stage" delay={i * 90}>
              <span className="journey__stage-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="journey__stage-name">{stage.stage}</h3>
              <ul>
                {stage.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
