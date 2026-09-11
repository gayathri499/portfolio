import { profile } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal className="section-head">
        <h2 className="section-title">Contact</h2>
        <span className="section-index">08</span>
      </Reveal>

      <div className="contact__grid">
        <Reveal delay={0}>
          <p className="contact__lede">Open to AI/ML, GenAI and software development roles.</p>
          <p className="contact__note">
            The fastest way to reach me is email — I'm happy to talk about
            internships, campus placements, off-campus roles, or anything
            project-related above.
          </p>
        </Reveal>

        <Reveal className="contact__list" delay={120}>
          <div className="contact__row">
            <span className="contact__row-label">Email</span>
            <a href={`mailto:${profile.email}`} className="contact__row-value">
              {profile.email}
            </a>
          </div>
          <div className="contact__row">
            <span className="contact__row-label">Phone</span>
            <a href={`tel:+91${profile.phone}`} className="contact__row-value">
              +91 {profile.phone}
            </a>
          </div>
          <div className="contact__row">
            <span className="contact__row-label">LinkedIn</span>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="contact__row-value">
              srigayathri-m
            </a>
          </div>
          <div className="contact__row">
            <span className="contact__row-label">GitHub</span>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="contact__row-value">
              gayathri499
            </a>
          </div>
          <div className="contact__row">
            <span className="contact__row-label">LeetCode</span>
            <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="contact__row-value">
              Srigayathri_111
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
