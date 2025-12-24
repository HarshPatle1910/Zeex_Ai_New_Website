import React from "react";
import retail from "../../assets/images/retial_security.png"
import traffic from "../../assets/images/traffic_management.png"
import industry from "../../assets/images/industrial_security.png"
import public_safety from "../../assets/images/public_safety.png"
import residential from "../../assets/images/residential_security.png"
import commercial from "../../assets/images/commercial_surveillance.png"
const SecuritySections: React.FC = () => {
  return (
    <>
      {/* Residential Section */}
      <section className="residential-section">
        {/* Title Line + Icon + Heading */}
        <div className="section-header">
          <div className="line"></div>
            <img 
              src="https://img.icons8.com/ios-filled/100/00d4ff/home.png" 
              alt="Home Icon" 
              className="section-icon"
            />
          <h2 className="gradient-title">Residential Security</h2>
          <div className="line"></div>
        </div>

        <div className="residential-content">
          {/* LEFT: IMAGE */}
          <div className="residential-image">
            <img src={residential} alt="Residential Security" />
          </div>

          {/* RIGHT SIDE: TEXT */}
          <div className="residential-text">
            <p>
              Comprehensive AI-powered security systems designed specifically for homes and residential properties.
              Our service integrates seamlessly with your existing smart home setup, providing unparalleled protection
              for your family and property.
            </p>

            <h3>Key Benefits</h3>
            <ul className="benefits-list">
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Smart perimeter protection</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Family facial recognition</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Mobile app monitoring</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Integration with existing security systems</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Custom alert settings</li>
            </ul>

            <button className="cta-button1">Learn More</button>
          </div>
        </div>

        {/* USE CASE CARDS */}
        <h3 className="use-case-title">How Residential Security Works in Practice</h3>
        <div className="cards-container">
          {[ 
            "Detecting unknown individuals approaching your property",
            "Distinguishing family members from visitors",
            "Monitoring entrance points and vulnerable areas",
            "Receiving alerts when children arrive home from school",
            "Identifying package delivery personnel"
          ].map((text, i) => (
            <div className="use-card" key={i}>
              <div className="case-header">
                <div className="number-badge">{i + 1}</div>
                <h4>Use Case</h4>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial Surveillance Section */}
      <section className="residential-section">
        <div className="section-header">
          <div className="line"></div>
          <img 
              src="https://img.icons8.com/ios-filled/100/00d4ff/city-buildings.png" 
              alt="Home Icon" 
              className="section-icon"
          />
          <h2 className="gradient-title">Commercial Surveillance</h2>
          <div className="line"></div>
        </div>

        <div className="residential-content">
          <div className="residential-image">
            <img src={commercial} alt="Residential Security" />
          </div>

          <div className="residential-text">
            <p>
              Enterprise-grade security solutions designed for businesses of all sizes. Our commercial surveillance system combines AI analytics with scalable infrastructure to protect your assets, employees, and customers around the clock.
            </p>

            <h3>Key Benefits</h3>
            <ul className="benefits-list">
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Multi-site monitoring</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Employee access management</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Theft prevention</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Business intelligence gathering</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Regulatory compliance</li>
            </ul>

            <button className="cta-button1">Learn More</button>
          </div>
        </div>

        <h3 className="use-case-title">How Commercial Surveillance Works in Practice</h3>
        <div className="cards-container">
          {[
            "Retail loss prevention with product recognition",
            "Office building access control",
            "Warehouse inventory and security management",
            "Banking and financial institution security",
            "Retail customer behavior analysis"
          ].map((text, i) => (
            <div className="use-card" key={i}>
              <div className="case-header">
                <div className="number-badge">{i + 1}</div>
                <h4>Use Case</h4>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Public Safety Section */}
      <section className="residential-section">
        <div className="section-header">
          <div className="line"></div>
          <img 
              src="https://img.icons8.com/ios-filled/100/00d4ff/marker.png" 
              alt="Home Icon" 
              className="section-icon"
            />
          <h2 className="gradient-title">Public Safety</h2>
          <div className="line"></div>
        </div>

        <div className="residential-content">
          <div className="residential-image">
            <img src={public_safety} alt="Residential Security" />
          </div>

          <div className="residential-text">
            <p>
              Advanced surveillance solutions for public spaces that enhance safety while respecting privacy. Our public safety systems help identify potential threats before they escalate, enabling proactive security measures.
            </p>

            <h3>Key Benefits</h3>
            <ul className="benefits-list">
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Crowd anomaly detection</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Privacy-focused monitoring</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Emergency situation recognition</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Integration with emergency services</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Scalable deployment options</li>
            </ul>

            <button className="cta-button1">Learn More</button>
          </div>
        </div>

        <h3 className="use-case-title">How Public Safety Works in Practice</h3>
        <div className="cards-container">
          {[
            "Transportation hub security",
            "Public event monitoring",
            "Parks and recreation area safety",
            "School and campus security",
            "Emergency response coordination"
          ].map((text, i) => (
            <div className="use-card" key={i}>
              <div className="case-header">
                <div className="number-badge">{i + 1}</div>
                <h4>Use Case</h4>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Retail Security Section */}
      <section className="residential-section">
        <div className="section-header">
          <div className="line"></div>
          <img 
              src="https://img.icons8.com/ios-filled/100/00d4ff/shopping-cart.png" 
              alt="Home Icon" 
              className="section-icon"
            />
          <h2 className="gradient-title">Retail Security</h2>
          <div className="line"></div>
        </div>

        <div className="residential-content">
          <div className="residential-image">
            <img src={retail} alt="Residential Security" />
          </div>

          <div className="residential-text">
            <p>
              Specialized AI surveillance for retail environments that prevents theft while enhancing customer experience. Our retail security solutions provide real-time analytics and automated threat detection.
            </p>
            <h3>Key Benefits</h3>
            <ul className="benefits-list">
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Theft prevention and detection</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Customer behavior analytics</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Inventory monitoring</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Queue management</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Loss prevention reporting</li>
            </ul>

            <button className="cta-button1">Learn More</button>
          </div>
        </div>
        <h3 className="use-case-title">How Public Safety Works in Practice</h3>
        <div className="cards-container">
          {[
            "Shoplifting detection and prevention",
            "Customer flow analysis",
            "Employee theft monitoring",
            "Queue length optimization",
            "Product placement insights"
          ].map((text, i) => (
            <div className="use-card" key={i}>
              <div className="case-header">
                <div className="number-badge">{i + 1}</div>
                <h4>Use Case</h4>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Security Section */}
      <section className="residential-section">
        <div className="section-header">
          <div className="line"></div>
          <img 
              src="https://img.icons8.com/ios-filled/100/00d4ff/factory.png" 
              alt="Home Icon" 
              className="section-icon"
            />
          <h2 className="gradient-title">Industrial Security</h2>
          <div className="line"></div>
        </div>

        <div className="residential-content">
          <div className="residential-image">
            <img src={industry} alt="Residential Security" />
          </div>

          <div className="residential-text">
            <p>
              Robust security solutions for industrial facilities and manufacturing plants. Our industrial security systems ensure worker safety and protect valuable equipment and processes.
            </p>
            <h3>Key Benefits</h3>
            <ul className="benefits-list">
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Worker safety monitoring</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Equipment protection</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Process compliance</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Hazard detection</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> 24/7 facility monitoring</li>
            </ul>

            <button className="cta-button1">Learn More</button>
          </div>
        </div>
        <h3 className="use-case-title">How Industrial Security Works in Practice</h3>
        <div className="cards-container">
          {[
            "Safety protocol compliance monitoring",
            "Equipment malfunction detection",
            "Unauthorized access prevention",
            "Emergency evacuation coordination",
            "Quality control monitoring"
          ].map((text, i) => (
            <div className="use-card" key={i}>
              <div className="case-header">
                <div className="number-badge">{i + 1}</div>
                <h4>Use Case</h4>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Traffic Management Section */}
      <section className="residential-section">
        <div className="section-header">
          <div className="line"></div>
          <img 
              src="https://img.icons8.com/ios-filled/100/00d4ff/traffic-jam.png" 
              alt="Home Icon" 
              className="section-icon"
            />
          <h2 className="gradient-title">Traffic Management</h2>
          <div className="line"></div>
        </div>

        <div className="residential-content">
          <div className="residential-image">
            <img src={traffic} alt="Residential Security" />
          </div>
          <div className="residential-text">
            <p>
              Intelligent traffic monitoring and management systems for cities and highways. Our traffic solutions reduce congestion, improve safety, and provide real-time traffic analytics. Our industrial security systems ensure worker safety and protect valuable equipment and processes.
            </p>
            <h3>Key Benefits</h3>
            <ul className="benefits-list">
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Traffic flow optimizationTraffic flow optimization</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Accident detection</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Congestion monitoring</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Signal timing optimization</li>
              <li><img src="https://img.icons8.com/ios-filled/100/00d4ff/checkmark.png" alt="check icon" className="tick-icon" /> Traffic pattern analysis</li>
            </ul>

            <button className="cta-button1">Learn More</button>
          </div>
        </div>
        <h3 className="use-case-title">How Traffic Management Works in Practice</h3>
        <div className="cards-container">
          {[
            "Real-time traffic monitoring",
            "Accident detection and response",
            "Traffic signal optimization",
            "Congestion prediction",
            "Emergency vehicle routing"
          ].map((text, i) => (
            <div className="use-card" key={i}>
              <div className="case-header">
                <div className="number-badge">{i + 1}</div>
                <h4>Use Case</h4>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default SecuritySections;
