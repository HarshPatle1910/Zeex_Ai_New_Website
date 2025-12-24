import { useEffect, useRef } from "react";
import retail from "../../assets/images/retial_security.png"
import traffic from "../../assets/images/traffic_management.png"
import industry from "../../assets/images/industrial_security.png"
import public_safety from "../../assets/images/public_safety.png"
import residential from "../../assets/images/residential_security.png"
import commercial from "../../assets/images/commercial_surveillance.png"
const VerticalSlider = () => {
  const sliderRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sliderEl = sliderRef.current;
    if (!sliderEl) return;

    const slides = Array.from(
      sliderEl.querySelectorAll<HTMLElement>(".vs-slide")
    );
    const prevBtn = sliderEl.querySelector(".vs-prev") as HTMLElement;
    const nextBtn = sliderEl.querySelector(".vs-next") as HTMLElement;
    const viewport = sliderEl.querySelector(".vs-viewport") as HTMLElement;

    let current = 0;
    let busy = false;
    const animDuration = 700;

    // initialize positions
    function init() {
      slides.forEach((s, i) => {
        s.classList.remove(
          "is-active",
          "is-next",
          "is-out-up",
          "is-enter-from-bottom"
        );
        s.setAttribute("aria-hidden", "true");
        if (i === current) {
          s.classList.add("is-active");
          s.setAttribute("aria-hidden", "false");
        } else if (
          i === current + 1 ||
          (current === slides.length - 1 && i === 0)
        ) {
          s.classList.add("is-next");
        }
        s.style.zIndex = i === current ? "20" : "10";
      });
    }

    function moveTo(nextIndex: number) {
      if (busy) return;
      busy = true;
      const total = slides.length;
      nextIndex = (nextIndex + total) % total;

      if (nextIndex === current) {
        busy = false;
        return;
      }

      const currSlide = slides[current];
      const nextSlide = slides[nextIndex];

      nextSlide.classList.remove(
        "is-next",
        "is-out-up",
        "is-enter-from-bottom",
        "is-active"
      );
      nextSlide.style.zIndex = "18";
      nextSlide.classList.add("is-next");
      nextSlide.setAttribute("aria-hidden", "false");

      currSlide.classList.remove("is-active");
      currSlide.classList.add("is-out-up");

      setTimeout(() => {
        nextSlide.classList.remove("is-next");
        nextSlide.classList.add("is-enter-from-bottom", "is-active");

        setTimeout(() => {
          slides.forEach((s, i) => {
            s.classList.remove("is-out-up", "is-enter-from-bottom");
            s.setAttribute("aria-hidden", i === nextIndex ? "false" : "true");
            s.style.zIndex = i === nextIndex ? "20" : "10";
          });
          current = nextIndex;
          busy = false;
        }, animDuration);
      }, 60);
    }

    function movePrev() {
      if (busy) return;
      busy = true;

      const total = slides.length;
      let prevIndex = (current - 1 + total) % total;

      const currSlide = slides[current];
      const prevSlide = slides[prevIndex];

      prevSlide.classList.remove(
        "is-next",
        "is-out-up",
        "is-enter-from-bottom",
        "is-active"
      );
      prevSlide.style.zIndex = "22";
      prevSlide.style.transform = "translateY(-40px) rotateX(6deg) scale(.98)";
      prevSlide.style.opacity = "0";

      currSlide.classList.remove("is-active");
      currSlide.classList.add("is-out-up");

      requestAnimationFrame(() => {
        prevSlide.style.transition =
          "transform 700ms cubic-bezier(.2,.9,.2,1), opacity 500ms ease";
        prevSlide.style.transform = "translateY(0) rotateX(0deg) scale(1)";
        prevSlide.style.opacity = "1";

        setTimeout(() => {
          prevSlide.style.transition = "";
          prevSlide.style.transform = "";
          prevSlide.style.opacity = "";

          slides.forEach((s, i) => {
            s.classList.remove(
              "is-out-up",
              "is-enter-from-bottom",
              "is-next",
              "is-active"
            );
            s.setAttribute("aria-hidden", i === prevIndex ? "false" : "true");
            s.style.zIndex = i === prevIndex ? "20" : "10";
          });

          prevSlide.classList.add("is-active");
          current = prevIndex;
          busy = false;
        }, animDuration);
      });
    }

    // Mouse wheel
    let wheelTimeout: number | null = null;

    function onWheel(e: WheelEvent) {
      if (wheelTimeout) return;
      wheelTimeout = setTimeout(() => (wheelTimeout = null), 450);
      if (e.deltaY > 0) moveTo(current + 1);
      else movePrev();
    }

    // Touch
    let startY: number | null = null;
    viewport.addEventListener("touchstart", (e) => {
      startY = e.touches[0].clientY;
    });

    viewport.addEventListener("touchend", (e) => {
      if (startY === null) return;
      const endY = e.changedTouches?.[0].clientY ?? null;
      if (endY === null) return;

      const diff = startY - endY;
      if (Math.abs(diff) > 30) {
        if (diff > 0) moveTo(current + 1);
        else movePrev();
      }
      startY = null;
    });

    // Buttons
    nextBtn?.addEventListener("click", () => moveTo(current + 1));
    prevBtn?.addEventListener("click", () => movePrev());

    // Wheel
    viewport.addEventListener("wheel", onWheel, { passive: true });

    // Keyboard
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown")
        moveTo(current + 1);
      if (e.key === "ArrowUp" || e.key === "PageUp") movePrev();
    });

    init();
  }, []);

  return (
    <section ref={sliderRef} id="vertical-slider" className="vertical-slider">
      <button className="vs-arrow vs-prev" aria-label="Previous slide">
        ▲
      </button>

      <div className="vs-viewport">
        {/* --- Slide 1 --- */}
        <article className="vs-slide" data-index="0" aria-hidden="false">
          <div className="vs-left">
            <h2>Residential Security</h2>
            <p>
              Comprehensive AI-powered security systems designed specifically for homes and residential properties. Our service integrates seamlessly with your existing smart home setup, providing unparalleled protection for your family and property.
            </p>
            <a className="vs-link" href="#">
              Explore solution →
            </a>
          </div>
          <figure className="vs-right">
            <img src={residential} alt="Retail security" />
          </figure>
        </article>

        {/* --- Slide 2 --- */}
        <article className="vs-slide" data-index="1" aria-hidden="true">
          <div className="vs-left">
            <h2>Commercial Surveillance</h2>
            <p>
              Enterprise-grade security solutions designed for businesses of all sizes. Our commercial surveillance system combines AI analytics with scalable infrastructure to protect your assets, employees, and customers around the clock.
            </p>
            <a className="vs-link" href="#">
              Explore solution →
            </a>
          </div>
          <figure className="vs-right">
            <img src={commercial} alt="Bank security" />
          </figure>
        </article>

        {/* --- Slide 3 --- */}
        <article className="vs-slide" data-index="1" aria-hidden="true">
          <div className="vs-left">
            <h2>Public Safety</h2>
            <p>
                Advanced surveillance solutions for public spaces that enhance safety while respecting privacy. Our public safety systems help identify potential threats before they escalate, enabling proactive security measures.
            </p>
            <a className="vs-link" href="#">
              Explore solution →
            </a>
          </div>
          <figure className="vs-right">
            <img src={public_safety} alt="Bank security" />
          </figure>
        </article>

        {/* --- Slide 4 --- */}
        <article className="vs-slide" data-index="1" aria-hidden="true">
          <div className="vs-left">
            <h2>Retail Security</h2>
            <p>
               Specialized AI surveillance for retail environments that prevents theft while enhancing customer experience. Our retail security solutions provide real-time analytics and automated threat detection. 
            </p>
            <a className="vs-link" href="#">
              Explore solution →
            </a>
          </div>
          <figure className="vs-right">
            <img src={retail} alt="Bank security" />
          </figure>
        </article>

        {/* --- Slide 5 --- */}
        <article className="vs-slide" data-index="1" aria-hidden="true">
          <div className="vs-left">
            <h2>Industrial Security</h2>
            <p>
                Robust security solutions for industrial facilities and manufacturing plants. Our industrial security systems ensure worker safety and protect valuable equipment and processes.
            </p>
            <a className="vs-link" href="#">
              Explore solution →
            </a>
          </div>
          <figure className="vs-right">
            <img src={industry} alt="Bank security" />
          </figure>
        </article>

         {/* --- Slide 6 --- */}
        <article className="vs-slide" data-index="1" aria-hidden="true">
          <div className="vs-left">
            <h2>Traffic Management</h2>
            <p>
                Intelligent traffic monitoring and management systems for cities and highways. Our traffic solutions reduce congestion, improve safety, and provide real-time traffic analytics.
            </p>
            <a className="vs-link" href="#">
              Explore solution →
            </a>
          </div>
          <figure className="vs-right">
            <img src={traffic} alt="Bank security" />
          </figure>
        </article>

        
      </div>

      <button className="vs-arrow vs-next" aria-label="Next slide">
        ▼
      </button>
    </section>
  );
};

export default VerticalSlider;
