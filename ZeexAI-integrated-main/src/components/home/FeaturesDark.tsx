// src/components/home/FeaturesDark.tsx
import React from "react";

const FeaturesDark: React.FC = () => {
    return (
        <section className="features-dark">
            <div className="features-grid-dark">

                <div className="feature-card-dark">
                    <div className="icon-dark">🧠</div>
                    <h3>AI-Powered Automation</h3>
                    <p>
                        Leverage cutting-edge machine learning to automate
                        workflows and accelerate decisions.
                    </p>
                </div>

                <div className="feature-card-dark">
                    <div className="icon-dark">⚡</div>
                    <h3>Lightning Fast</h3>
                    <p>
                        Process millions of data points in seconds using
                        highly optimized AI infrastructure.
                    </p>
                </div>

                <div className="feature-card-dark">
                    <div className="icon-dark">🛡️</div>
                    <h3>Enterprise Security</h3>
                    <p>
                        Military-grade encryption and compliance to keep 
                        your data fully protected.
                    </p>
                </div>

                <div className="feature-card-dark">
                    <div className="icon-dark">📈</div>
                    <h3>Smart Insights</h3>
                    <p>
                        Turn raw data into powerful intelligence with 
                        predictive analytics and insights.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default FeaturesDark;
