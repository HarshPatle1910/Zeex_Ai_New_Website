import { useParams, Link } from 'react-router-dom';
import { getBlogById } from '../../data/blogs';
import NotFound from '../NotFound';
import '../../assets/styles/blogs.css';
import '../../assets/styles/home.css';

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const blog = id ? getBlogById(id) : undefined;

  if (!blog) {
    return <NotFound />;
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-container">
        {/* Back to Blogs Link */}
        <Link to="/Blogs" className="back-to-blogs">
          ← Back to Blogs
        </Link>

        {/* Blog Header */}
        <header className="blog-detail-header">
          <span className="blog-detail-badge">{blog.badge}</span>
          <h1 className="blog-detail-title">{blog.title}</h1>
          <div className="blog-detail-meta">
            <span className="blog-detail-date">{blog.date}</span>
            <span className="blog-detail-author">• {blog.author}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="blog-detail-image">
          <img src={blog.img} alt={blog.title} />
        </div>

        {/* Blog Content */}
        <article 
          className="blog-detail-content"
          dangerouslySetInnerHTML={{ __html: blog.fullContent }}
        />

        {/* Related Blogs Section */}
        <section className="related-blogs">
          <h2>Related Articles</h2>
          <div className="related-blogs-grid">
            {/* This could be enhanced to show actual related blogs */}
            <Link to="/Blogs" className="related-blog-card">
              <h3>Explore More Insights</h3>
              <p>Discover more articles about AI security and surveillance</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

