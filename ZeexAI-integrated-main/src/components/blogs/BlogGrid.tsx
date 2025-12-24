import { useState } from "react";
import BlogCard from "../../components/blogs/BlogCard";
import Filters from "../../components/blogs/Filters";
import { blogs } from "../../data/blogs";

export default function BlogGrid() {
  const [filter, setFilter] = useState("all");

  // Transform blog data for BlogCard component
  const blogCards = blogs.map(blog => ({
    category: blog.category,
    img: blog.img,
    badge: blog.badge,
    title: blog.title,
    text: blog.text,
    date: `${blog.date} • ${blog.author}`,
    link: `/blog/${blog.id}`, // Internal route instead of external link
  }));

  return (
    <>
      <Filters onSelect={(cat) => setFilter(cat)} />

      <div className="blogs-grid">
        {blogCards
          .filter((b) => filter === "all" || b.category === filter)
          .map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
      </div>
    </>
  );
}