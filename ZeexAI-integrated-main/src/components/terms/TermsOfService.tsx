const TermsOfService = () => {
  return (
    <section>
      

      <div className="policy-wrapper">
        <div className="policy-grid">

          {/* CARD 0 */}
          <div className="policy-card">
            <div className="pc-head">
              <img src="https://img.icons8.com/ios-filled/50/7FD1FF/document.png" alt="shield icon" className="pc-icon"/>
              <h3 className="pc-title">Terms & Conditions</h3>
            </div>
            <p className="pc-para">
              Welcome to ZeexAI. Please read these Terms of Service carefully before using our website or services. By accessing our services, you agree to be bound by these terms and our Privacy Policy.
            </p>
          </div>

          {/* CARD 1 */}
          <div className="policy-card">
            <div className="pc-head">
              <img src="https://img.icons8.com/ios-filled/100/00d4ff/checked--v1.png" alt="shield icon" className="pc-icon"/>
              <h3 className="pc-title">1. Agreement to Terms</h3>
            </div>
            <p className="pc-para">
              By accessing our website or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of the terms, you may not access the website or use our services.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="policy-card">
            <div className="pc-head">
              <img src="https://img.icons8.com/ios-filled/50/7FD1FF/shield.png" alt="shield icon" className="pc-icon"/>
              <h3 className="pc-title">2. Use of Services</h3>
            </div>
            <p className="pc-para">
              ZeexAI provides AI-powered surveillance and security solutions. Our services may include software, hardware, web applications, mobile applications, and related support services as described on our website.
            </p>
            <p className="pc-subtitle">User Accounts</p>
            <p className="pc-para">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="pc-subtitle">License to Use</p>
            <p className="pc-para">
              ZeexAI grants you a limited, non-exclusive, non-transferable, revocable license to use our services for your personal or business purposes in accordance with these Terms.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="policy-card">
            <div className="pc-head">
              <img src="https://img.icons8.com/ios-filled/50/7FD1FF/document.png" alt="shield icon" className="pc-icon"/>
              <h3 className="pc-title">3. Intellectual Property</h3>
            </div>
            <p className="pc-para">
              The Service and its original content, features, and functionality are and will remain the exclusive property of ZeexAI and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ZeexAI.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="policy-card">
            <div className="pc-head">
              <img src="https://img.icons8.com/ios-filled/100/00d4ff/error--v1.png" alt="shield icon" className="pc-icon"/>
              <h3 className="pc-title">4. Limitation of Liability</h3>
            </div>
            <p className="pc-para">
              In no event shall ZeexAI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="policy-card">
            <div className="pc-head">
              <img src="https://img.icons8.com/ios-filled/100/00d4ff/scales.png" alt="shield icon" className="pc-icon"/>
              <h3 className="pc-title">5. Governing Law</h3>
            </div>
            <p className="pc-para">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of our services will be subject to the exclusive jurisdiction of the courts in Chennai, India.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="policy-card">
            <div className="pc-head">
              <img src="https://img.icons8.com/ios-filled/100/00d4ff/clock--v1.png" alt="shield icon" className="pc-icon"/>
              <h3 className="pc-title">6. Changes to Terms</h3>
            </div>
            <p className="pc-para">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>

          {/* CARD 7 */}
          <div className="policy-card">
            <div className="pc-head">
              <img src="https://img.icons8.com/ios-filled/100/7FD1FF/new-post.png" alt="shield icon" className="pc-icon"/>
              <h3 className="pc-title">7. Contact Us</h3>
            </div>
            <p className="pc-para">
              If you have questions or wish to exercise your privacy rights, please contact us at:
            </p>

            <div className="contact-box">
              <h4 className="cb-title">ZeexAI</h4>

              <div className="cb-row">
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  Nirmaan, CFI<br />
                  IIT Madras<br />
                  Chennai, India 600036
                </p>
              </div>

              <div className="cb-row">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:admin@zeexai.com" className="cb-mail">admin@zeexai.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
