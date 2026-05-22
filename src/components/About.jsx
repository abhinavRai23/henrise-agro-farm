import React from 'react';
import { ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2>About &amp; Infrastructure</h2>
          <p>A trusted, certified B2B agricultural and poultry partner in Uttar Pradesh.</p>
        </div>

        <div className="about-grid">
          <div className="about-text-content">
            <h3 className="about-subtitle">Enterprise Scale &amp; Legal Trust</h3>
            <p className="about-description">
              <strong>HENRISE AGRO FARM</strong> is an authorized, GST-registered agricultural proprietorship owned and operated by <strong>Mo Ashraf</strong>. Our operations are built on a solid foundation of biosafety compliance, veterinary excellence, and robust distribution logistics.
            </p>
            <p className="about-description">
              We operate <strong>4 dedicated farm units</strong> strategically positioned across Uttar Pradesh. These units are highly specialized to deliver optimal efficiency across three core segments: high-yield hatchery management, nutritious poultry feed production, and secure veterinary medicine distribution.
            </p>

            <div className="infrastructure-list">
              <div className="infra-item">
                <CheckCircle2 className="infra-icon" />
                <div>
                  <h4>Certified Hatchery Management</h4>
                  <p>State-of-the-art incubation and climate controls ensuring high chick viability.</p>
                </div>
              </div>
              <div className="infra-item">
                <CheckCircle2 className="infra-icon" />
                <div>
                  <h4>Nutrient-Rich Feed Mills</h4>
                  <p>Equipped with modern machinery for high-protein layer and broiler feed mixing.</p>
                </div>
              </div>
              <div className="infra-item">
                <CheckCircle2 className="infra-icon" />
                <div>
                  <h4>Regulated Medical Storage</h4>
                  <p>Authorized cold-chain storage to preserve veterinary vaccines and nutrition supplements.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats-card">
            <h3 className="stats-title">Key Indicators</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <MapPin className="stat-icon" size={32} />
                <span className="stat-number">4</span>
                <span className="stat-label">Farm Locations</span>
              </div>
              <div className="stat-card">
                <ShieldCheck className="stat-icon" size={32} />
                <span className="stat-number">100%</span>
                <span className="stat-label">GST &amp; RBI Compliant</span>
              </div>
              <div className="stat-card">
                <Award className="stat-icon" size={32} />
                <span className="stat-number">B2B</span>
                <span className="stat-label">Wholesale Model</span>
              </div>
            </div>
            <div className="owner-badge">
              <span className="badge-title">Legal Entity Status</span>
              <p>Registered Proprietorship</p>
              <p className="badge-owner">Proprietor: Mo Ashraf</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
