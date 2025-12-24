import { useState } from "react";


interface FilterProps {
  onSelect: (category: string) => void;
}

export default function Filters({ onSelect }: FilterProps) {
  const [active, setActive] = useState("all");

  const filters = [
    "all",
    "technology",
    "privacy",
    "trends",
    "case-study",
    "residential",
  ];

  return (
    <div className="filter-bar">
      {filters.map((f) => (
        <button
          key={f}
          className={`filter-btn ${active === f ? "active" : ""}`}
          data-category={f}
          onClick={() => {
            setActive(f);
            onSelect(f);
          }}
        >
          {f.replace("-", " ").replace(/\b\w/g, (x) => x.toUpperCase())}
        </button>
      ))}
    </div>
  );
}