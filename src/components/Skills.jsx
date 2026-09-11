import { skillGroups } from "../data/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section">
        <Reveal className="section-head section-head--dark">
          <h2 className="section-title">Skills</h2>
          <span className="section-index section-index--dark">02</span>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 80}>
              <span className="skill-group__label">{group.label}</span>
              <div className="skill-group__chips">
                {group.primary.map((s) => (
                  <span key={s} className="chip chip--primary">
                    {s}
                  </span>
                ))}
                {group.secondary.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
