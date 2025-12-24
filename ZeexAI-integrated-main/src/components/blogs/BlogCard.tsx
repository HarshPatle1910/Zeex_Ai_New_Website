

export interface BlogCardProps {
  category: string;
  img: string;
  badge: string;
  title: string;
  text: string;
  date: string;
  link: string;
}

export default function BlogCard({
  category,
  img,
  badge,
  title,
  text,
  date,
  link,
}: BlogCardProps) {
  return (
    <article className="blog-card" data-category={category}>
      <div className="media">
        <img
  src={img}
  alt={title}
  width="400"
  height="250"
  loading="lazy"
/>
      </div>

      <div className="blog-content">
        <span className="badge">{badge}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <span className="meta">{date}</span>
        <a
  className="read-more"
  href={link}
  target="_blank"
  rel="noopener noreferrer"
>
  Read More →
</a>
      </div>
    </article>
  );
}