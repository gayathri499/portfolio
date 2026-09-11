import { profile } from "../data/content";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__grid-texture" aria-hidden="true" />
      <div className="hero__blob hero__blob--a" aria-hidden="true" />
      <div className="hero__blob hero__blob--b" aria-hidden="true" />

      <div className="hero__content">
        <span className="hero__field">{profile.degree}</span>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">{profile.headline}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--solid">
            View projects
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="btn">
            LinkedIn
          </a>
          <a href="#contact" className="btn">
            Contact me
          </a>
        </div>

        <div className="hero__meta">
          <div>
            focus
            <strong>AI/ML &amp; GenAI</strong>
          </div>
          <div>
            currently
            <strong>Final-year student</strong>
          </div>
          <div>
            based in
            <strong>India</strong>
          </div>
        </div>
      </div>

      <div className="hero__portrait-wrap">
        <div className="hero__portrait">
          <div className="hero__portrait-ring" aria-hidden="true" />
          <div className="hero__portrait-frame">
            <img
              src={profileImg}
              alt={`Portrait of ${profile.name}`}
              className="hero__portrait-img"
            />
          </div>
          <div className="hero__portrait-tag">
            <span aria-hidden="true" />
            open to work
          </div>
        </div>
      </div>
    </section>
  );
}
