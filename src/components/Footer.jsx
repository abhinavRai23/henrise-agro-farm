import React from 'react';
import { navigate } from '../router';

export default function Footer() {
  const policies = [
    { path: '/terms-and-conditions', label: 'Terms & Conditions' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/cancellation-and-refund', label: 'Cancellation & Refund Policy' },
    { path: '/shipping-and-delivery', label: 'Shipping & Delivery Policy' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-info">
          <h4 className="footer-brand">HENRISE AGRO FARM</h4>
          <p className="footer-copyright">
            &copy; 2026 HENRISE AGRO FARM. All Rights Reserved.
          </p>
          <p className="footer-subtext">
            Proprietorship owned by Mo Ashraf. <br /> Azamgarh, Uttar Pradesh, India.
          </p>
          <p className="footer-builtby">
            Built by{' '}
            <a
              href="https://abhinavrai23.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-builtby-link"
            >
              Abhinav Rai
            </a>
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer legal compliance links">
          {policies.map((p) => (
            <a
              key={p.path}
              className="footer-link"
              href={p.path}
              onClick={(e) => {
                e.preventDefault();
                navigate(p.path);
              }}
            >
              {p.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
