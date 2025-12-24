
import { Link } from 'react-router-dom';

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
  // Check if link is internal (starts with /) or external
  const isInternalLink = link.startsWith('/');
  
  if (isInternalLink) {
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
          <Link
            className="read-more"
            to={link}
            style={{ textDecoration: 'none' }}
          >
            Read More →
          </Link>
        </div>
      </article>
    );
  }
  
  // Fallback for external links (if any remain)
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