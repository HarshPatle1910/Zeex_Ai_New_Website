import { useEffect, useRef } from "react";

const text = "About Zeex AI";

export default function Hero() {
  const targetRef = useRef<HTMLHeadingElement | null>(null);
  const indexRef = useRef(0);

  // Typewriter effect
  useEffect(() => {
    function typeNext() {
      if (!targetRef.current) return;
      if (indexRef.current < text.length) {
        targetRef.current.textContent =
          (targetRef.current.textContent ?? "") + text.charAt(indexRef.current);
        indexRef.current++;
        setTimeout(typeNext, 100);
      }
    }
    typeNext();
  }, []);

  // Scroll reveal
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll(".reveal"));
    function onScroll() {
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="about"
      className="reveal py-20 px-6 bg-bg-1 text-slate-100 text-center"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Centered glowing heading */}
      <h1
        ref={targetRef}
        id="typewriter"
        className="text-4xl md:text-5xl font-semibold mb-6"
        style={{
          textShadow:
            "0 0 8px rgba(59,130,246,0.8), 0 0 16px rgba(59,130,246,0.6)",
        }}
      />

      {/* Center-aligned tagline + description */}
      <div className="mx-auto max-w-3xl">
        <h2
          className="text-lg md:text-xl font-medium mb-3"
          style={{
            color: "var(--muted)",
            textAlign: "center",
            textShadow: "0 0 6px var(--accent), 0 0 12px var(--accent2)",
          }}
        >
          Empowering Vision. Enhancing Safety. Automating Intelligence.
        </h2>
        <p
          className="text-slate-300 leading-relaxed mt-8"
          style={{ textAlign: "center" }}
        >
          Zeex AI is an advanced AI-powered platform delivering computer vision,
          CCTV surveillance analytics, and automation solutions — enabling
          smarter, safer environments through real-time detection and actionable
          insights.
        </p>
      </div>
    </section>
  );
}