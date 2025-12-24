
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-icon">
          <i className="fa-solid fa-envelope"></i>
        </div>

        <div className="newsletter-content">
          <h2>Stay in the Loop</h2>
          <p>
            Sign up for our newsletter to get the latest AI security news and
            insights.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed: " + email);
              setEmail("");
            }}
          >
            <input
              type="email"
              value={email}
              placeholder="Your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}