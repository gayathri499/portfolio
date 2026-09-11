import { useReveal } from "../hooks/useReveal";

/**
 * Generic scroll-reveal wrapper. Wrap any block with <Reveal> to fade/rise
 * it in as it enters the viewport. Pass `delay` (ms) to stagger siblings,
 * and `as` to change the wrapping element.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  style = {},
  ...rest
}) {
  const [ref, inView] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "reveal--in" : ""} ${className}`.trim()}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms", ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
