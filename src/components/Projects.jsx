import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { featuredProject, otherProjects } from "../data/content";
import Reveal from "./Reveal";

function RagVisual() {
  return (
    <div className="rag-flow" aria-hidden="true">
      <div className="rag-flow__node">upload: pdf · docx · pptx</div>
      <div className="rag-flow__arrow">↓ chunk + embed</div>
      <div className="rag-flow__node">ChromaDB retrieval</div>
      <div className="rag-flow__arrow">↓ context</div>
      <div className="rag-flow__node rag-flow__node--accent">Groq LLM response</div>
      <div className="rag-flow__arrow">↓</div>
      <div className="rag-flow__node">answer + source page refs</div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal className="section-head">
        <h2 className="section-title">Featured projects</h2>
        <span className="section-index">04</span>
      </Reveal>

      <Reveal as="article" className="featured-project" delay={80}>
        <div className="featured-project__body">
          <span className="featured-project__badge">Featured — GenAI / RAG</span>
          <h3 className="featured-project__title">{featuredProject.title}</h3>
          <p className="featured-project__desc">{featuredProject.description}</p>

          <ul className="featured-project__features">
            {featuredProject.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <div className="featured-project__tech">
            {featuredProject.tech.map((t) => (
              <span key={t} className="tag tag--accent">
                {t}
              </span>
            ))}
          </div>

          <div className="featured-project__actions">
            {featuredProject.github && (
              <a href={featuredProject.github} target="_blank" rel="noreferrer" className="btn btn--solid">
                <GithubIcon size={15} /> Code
              </a>
            )}
            {featuredProject.demo && (
              <a href={featuredProject.demo} target="_blank" rel="noreferrer" className="btn">
                <ExternalLink size={15} /> Live demo
              </a>
            )}
            {!featuredProject.github && !featuredProject.demo && (
              <span className="project-card__none">Links coming soon</span>
            )}
          </div>
        </div>

        <div className="featured-project__visual">
          <RagVisual />
        </div>
      </Reveal>

      <Reveal className="section-head" delay={0} style={{ marginTop: "3rem" }}>
        <h2 className="section-title" style={{ fontSize: "1.3rem" }}>
          Other projects
        </h2>
        <span className="section-index">05</span>
      </Reveal>

      <div className="projects-grid">
        {otherProjects.map((p, i) => (
          <Reveal key={p.title} as="div" className="project-card" delay={i * 70}>
            <h3 className="project-card__title">{p.title}</h3>
            <p className="project-card__desc">{p.description}</p>
            <div className="project-card__tech">
              {p.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-card__actions">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="btn">
                  <GithubIcon size={14} /> Code
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn">
                  <ExternalLink size={14} /> Demo
                </a>
              )}
              {!p.github && !p.demo && (
                <span className="project-card__none">Repo link coming soon</span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
