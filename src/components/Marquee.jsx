const ITEMS = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "RAG",
  "LangChain",
  "Streamlit",
  "Flask",
  "SQL",
  "Prompt Engineering",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
