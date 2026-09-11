import { ArrowUpRight } from "lucide-react";
import { problemSolving } from "../data/content";
import Reveal from "./Reveal";

export default function LeetCode() {
  return (
    <Reveal as="section" id="problem-solving" className="leetcode" delay={0}>
      <div>
        <h2 className="leetcode__headline">{problemSolving.headline}</h2>
        <p className="leetcode__sub">Ongoing practice in data structures &amp; algorithms</p>
      </div>
      <a href={problemSolving.link} target="_blank" rel="noreferrer" className="btn btn--solid">
        View LeetCode profile <ArrowUpRight size={15} />
      </a>
    </Reveal>
  );
}
