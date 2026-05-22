import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero_bg.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <img 
        src={heroBg} 
        alt="Henrise Agro Farm Hero Background" 
        className="hero-bg-image" 
        fetchPriority="high"
        width="1024"
        height="1024"
      />
      <div className="hero-overlay"></div>
      <div className="hero-container container">
        <div className="hero-content">
          <span className="hero-tagline">Authorized Agricultural Enterprise</span>
          <h1 className="hero-title">
            Premium Hatchery, Poultry Feed &amp; Wholesale Agro Distribution
          </h1>
          <p className="hero-subtitle">
            Operating across 4 state-of-the-art farm locations in Uttar Pradesh, providing high-protein commercial hen feed, certified veterinary supplies, and strategic retail shop tie-ups.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Partner With Us <ArrowRight size={18} />
            </a>
            <a href="#operations" className="btn btn-secondary hero-btn-secondary">
              Explore Operations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
