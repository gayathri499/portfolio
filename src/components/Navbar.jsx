import { useEffect, useState } from "react";
import { nav, profile } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__mark" onClick={handleNavClick}>
          {profile.initials}
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__cta btn">
          Get in touch
        </a>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar__mobile" aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={handleNavClick}>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={handleNavClick} className="navbar__mobile-cta">
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
}
