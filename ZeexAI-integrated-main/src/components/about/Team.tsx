import gaurav from "../../assets/images/gaurav.png";
import sujit from "../../assets/images/sujit.png";
import sanidhya from "../../assets/images/sanidhya.png";
import tarun from "../../assets/images/tarun.png";

function Member({ href, img, name, title }: { href: string; img: string; name: string; title: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="no-underline text-inherit">
      <div className="team-card">
        <img src={img} alt={name} className="team-img" />
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </a>
  );
}

export default function Team() {
  return (
    <section id="team" className="team-section reveal">
      <h2>Meet our team</h2>
      <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        <Member href="https://www.linkedin.com/in/yadavgauravkumar" img={gaurav} name="Gaurav Yadav" title="Founder & CEO" />
        <Member href="https://www.linkedin.com/in/sujit-laware/" img={sujit} name="Sujit Laware" title="Chief Technology Officer" />
        <Member href="https://www.linkedin.com/in/sanidhyak9" img={sanidhya} name="Sanidhya Kanhere" title="Chief Business Officer" />
        <Member href="https://in.linkedin.com/in/tarungangwar08" img={tarun} name="Tarun Gangwar" title="Chief Operating Officer" />
      </div>
    </section>
  );
}