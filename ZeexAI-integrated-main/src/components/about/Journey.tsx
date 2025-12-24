export default function Journey() {
  return (
    <section id="journey" className="reveal section py-16 px-4">
      <h2 className="text-2xl font-semibold text-center">Our journey</h2>
      <p className="mt-2 text-slate-100 text-center">
  A timeline of milestones from inception to innovation.
</p>

      <div className="timeline">
        <div className="timeline-item left">
          <div className="content">
            <h3>2022</h3>
            <p>Founded at IIT Madras, Nirmaan, CFI.</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h3>2023</h3>
            <p>Launched smart CCTV analytics platform.</p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="content">
            <h3>2024</h3>
            <p>Expanded into enterprise automation solutions.</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h3>2025</h3>
            <p>R&D on advanced computer vision models and multi-site deployments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}