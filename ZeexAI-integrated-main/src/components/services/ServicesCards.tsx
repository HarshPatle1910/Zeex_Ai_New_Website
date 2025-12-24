import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBuilding, faLocationDot, faIndustry, faTriangleExclamation, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import retail from "../../assets/images/retial_security.png"
import traffic from "../../assets/images/traffic_management.png"
import industry from "../../assets/images/industrial_security.png"
import public_safety from "../../assets/images/public_safety.png"
import residential from "../../assets/images/residential_security.png"
import commercial from "../../assets/images/commercial_surveillance.png"
const services = [
  {
    img: residential,
    title: "Residential Security",
    icon: faHouse,
    desc: "Comprehensive AI-powered security systems designed specifically for homes and residential properties...",
  },
  {
    img: commercial,
    title: "Commercial Surveillance",
    icon: faBuilding,
    desc: "Enterprise-grade security solutions designed for businesses of all sizes. Our commercial surveillance system...",
  },
  {
    img: public_safety,
    title: "Public Safety",
    icon: faLocationDot,
    desc: "Advanced surveillance solutions for public spaces that enhance safety while respecting privacy. Our...",
  },
  {
    img: retail,
    title: "Retail Security",
    icon: faCartShopping,
    desc: "Specialized AI surveillance for retail environments that prevents theft while enhancing customer experience. Our...",
  },
  {
    img: industry,
    title: "Industrial Security",
    icon: faIndustry,
    desc: "Robust security solutions for industrial facilities and manufacturing plants. Our industrial security systems...",
  },
  {
    img: traffic,
    title: "Traffic Management",
    icon: faTriangleExclamation,
    desc: "Intelligent traffic monitoring and management systems for cities and highways. Our traffic solutions...",
  },
];

const ServicesCards = () => {
  return (
    <section className="container my-5">
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="custom-card5">
              {/* Image Wrapper */}
              <div className="card-img-wrapper">
                <img src={service.img} className="card-img-top" alt={service.title} />
                {/* Title Overlay */}
                <div className="card-title-overlay">
                  <FontAwesomeIcon icon={service.icon} className="section-icon" />{" "}
                  {service.title}
                </div>
              </div>
              {/* Body */}
              <div className="card-body5">
                <div className="card-content5">
                  <p>{service.desc}</p>
                  <a href="#" className="read-link5">Learn more →</a>
                </div>
              </div>

            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default ServicesCards;
