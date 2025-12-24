import "../../assets/styles/home.css";
import "../../assets/styles/blogs.css";
import Hero from "../../components/blogs/Hero";
import BlogGrid from "../../components/blogs/BlogGrid";
import Newsletter from "../../components/blogs/NewsLetter";




const Blogs = () => {
  return (
    <>
      <Hero />

      <section className="blogs">
        <h2 className="blogs-title">Latest Insights</h2>
        <BlogGrid />
      </section>

      <Newsletter />
    </>
  );
};

export default Blogs;
