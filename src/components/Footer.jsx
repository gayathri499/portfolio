import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__copy">© 2026 {profile.name}. All rights reserved.</span>
        <div className="footer__links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.links.leetcode} target="_blank" rel="noreferrer">
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
}
