import React, { useState } from 'react';
import { Mail, MapPin, Building, FileText, Send, CheckCircle } from 'lucide-react';

// Google Apps Script Web App URL for Sheet + Email integration (see public/google_sheets_setup.txt)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyXajXI2gfswoeuaChWZo0XDDHXIt1Pe9QIyJIJmU3leFj2kIMeqzhj1kt_Yjmifu5x/exec';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    shopName: '',
    phone: '',
    requirement: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    if (!GOOGLE_SCRIPT_URL) {
      // Local development simulation
      console.log("Simulating sheet log & email delivery for:", formState);
      setTimeout(() => {
        setStatus('success');
        setFormState({
          name: '',
          shopName: '',
          phone: '',
          requirement: '',
          message: ''
        });
      }, 1200);
      return;
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(formState)
      });

      const result = await response.json();
      if (result.result === 'success') {
        setStatus('success');
        setFormState({
          name: '',
          shopName: '',
          phone: '',
          requirement: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Server error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with our commercial sales desk to set up bulk contracts or retail shop partnerships.</p>
        </div>

        <div className="contact-grid">
          {/* Side A: Strict Compliance Layout */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Official Legal &amp; Registration Details</h3>
            <p className="panel-desc">
              For payment aggregator checks, legal inquiries, and tax filings, please refer to our official registration data below:
            </p>

            <div className="compliance-details">
              <div className="comp-item">
                <Building className="comp-icon" />
                <div>
                  <span className="comp-label">Legal Trade Name</span>
                  <span className="comp-value">HENRISE AGRO FARM</span>
                  <span className="comp-subtext">Constitution: Proprietorship (Owner: Mo Ashraf)</span>
                </div>
              </div>

              <div className="comp-item">
                <FileText className="comp-icon" />
                <div>
                  <span className="comp-label">GSTIN / Registration Number</span>
                  <span className="comp-value text-monospace">09EGEPA6608E1ZN</span>
                  <span className="comp-subtext">Issued Date: 16/04/2026</span>
                </div>
              </div>

              <div className="comp-item">
                <MapPin className="comp-icon" />
                <div>
                  <span className="comp-label">Principal Place of Business (Registered Address)</span>
                  <span className="comp-value address-value">
                    Building No./Flat No.: 00,<br />
                    Name Of Premises: HENRISE AGRO FARM,<br />
                    Road/Street: AHIRAULA KAPTANGANJ,<br />
                    Locality: HENRISE AGRO FARM VILL PADARI,<br />
                    City/Village: Youdhisthirpatti,<br />
                    District: Azamgarh,<br />
                    Uttar Pradesh,<br />
                    PIN Code: 223221
                  </span>
                </div>
              </div>

              <div className="comp-item">
                <Mail className="comp-icon" />
                <div>
                  <span className="comp-label">Official Contact Email</span>
                  <a href="mailto:henriseagrofarm@gmail.com" className="comp-value email-link">
                    henriseagrofarm@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Side B: Interactive B2B Inquiry Form */}
          <div className="contact-form-panel">
            <h3 className="panel-title">Send B2B Wholesale Inquiry</h3>

            {status === 'success' ? (
              <div className="form-success-card">
                <CheckCircle size={48} className="success-icon" />
                <h4>Inquiry Sent Successfully!</h4>
                <p>Thank you for reaching out to Henrise Agro Farm. Mo Ashraf and our commercial logistics team will review your requirement and call you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="b2b-inquiry-form">
                <div className="form-group">
                  <label htmlFor="name">Contact Person Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="shopName">Shop or Business Name</label>
                  <input
                    type="text"
                    id="shopName"
                    name="shopName"
                    value={formState.shopName}
                    onChange={handleChange}
                    required
                    placeholder="Enter shop / business name"
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Mobile Number (Indian Standard)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    pattern="^[6-9]\d{9}$"
                    placeholder="Enter 10-digit mobile number"
                    title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9"
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="requirement">Primary B2B Requirement</label>
                  <select
                    id="requirement"
                    name="requirement"
                    value={formState.requirement}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                  >
                    <option value="" disabled>Select requirement...</option>
                    <option value="Feed">High-Protein Hen Feed / Layer Feed</option>
                    <option value="Chicks">Day-Old Hatchery Chicks</option>
                    <option value="Medicines">Certified Veterinary Nutrition &amp; Medicines</option>
                    <option value="Shop Tie-up">Retail Shop Tie-up &amp; Logistics Agreement</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Requirement Details / Order Volumetric Estimates</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your expected wholesale quantities, timeline, and delivery locations"
                    disabled={status === 'submitting'}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="form-error-alert" style={{ color: '#d90429', backgroundColor: '#fdf0f0', padding: '0.8rem 1rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid #fbc4c4', fontSize: '0.9rem' }}>
                    ⚠️ Submission failed. Please try again or email us directly at henriseagrofarm@gmail.com.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Processing...' : 'Send Wholesale Inquiry'}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="contact-map-container">
          <iframe
            title="Henrise Agro Farm Registered Location"
            src="https://maps.google.com/maps?q=Ahiraula%20Kaptanganj,%20Azamgarh,%20Uttar%20Pradesh%20223221&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
