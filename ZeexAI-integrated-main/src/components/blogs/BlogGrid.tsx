import { useState } from "react";
import BlogCard from "../../components/blogs/BlogCard";
import Filters from "../../components/blogs/Filters";

// import images
import img1 from "../../assets/images/card1.png";
import img2 from "../../assets/images/card2.png";
import img3 from "../../assets/images/card5.png";
import img4 from "../../assets/images/card3.png";
import img5 from "../../assets/images/card4.png";
import img6 from "../../assets/images/card6.png";

export default function BlogGrid() {
  const [filter, setFilter] = useState("all");

  const blogs = [
    {
      category: "technology",
      img: img1,
      badge: "Technology",
      title: "AI Advancements in Modern Surveillance",
      text: "Exploring how AI is reshaping surveillance with ethical guardrails.",
      date: "April 15, 2025 • ZeexAI Team",
      link: "https://www.zeexai.com/blog/ai-advancements",
    },
    {
      category: "privacy",
      img: img2,
      badge: "Privacy",
      title: "Balancing Privacy with Security in AI Surveillance",
      text: "How to balance trust and privacy in AI-driven systems.",
      date: "April 8, 2025 • ZeexAI Team",
      link: "https://www.zeexai.com/blog/privacy-security",
    },
    {
      category: "trends",
      img: img3,
      badge: "Trends",
      title: "5 Future Trends in AI Security for 2025",
      text: "Predictions shaping the next wave of AI security.",
      date: "April 1, 2025 • ZeexAI Team",
      link: "https://www.zeexai.com/blog/future-trends",
    },
    {
      category: "technology",
      img: img4,
      badge: "Technology",
      title: "Facial Recognition: Myths and Realities",
      text: "Debunking misconceptions and real-world applications.",
      date: "Mar 25, 2025 • ZeexAI Team",
      link: "https://www.zeexai.com/blog/facial-recognition",
    },
    {
      category: "residential",
      img: img5,
      badge: "Residential",
      title: "Integrating AI Security into Your Smart Home",
      text: "Making AI features transparent and aligned with user needs.",
      date: "Mar 18, 2025 • ZeexAI Team",
      link: "https://www.zeexai.com/blog/smart-home",
    },
    {
      category: "case-study",
      img: img6,
      badge: "Case Study",
      title: "How ZeexAI Protected a Major Retail Chain",
      text: "Outcomes and learnings from deployment.",
      date: "Mar 10, 2025 • ZeexAI Team",
      link: "https://www.zeexai.com/blog/case-study",
    },
  ];

  return (
    <>
      <Filters onSelect={(cat) => setFilter(cat)} />

      <div className="blogs-grid">
        {blogs
          .filter((b) => filter === "all" || b.category === filter)
          .map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
      </div>
    </>
  );
}