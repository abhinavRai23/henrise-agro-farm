import React from 'react';
import hatcheryImg from '../assets/hatchery.jpg';
import feedImg from '../assets/feed.jpg';
import medicineImg from '../assets/medicine.jpg';

export default function Operations() {
  const activities = [
    {
      title: "Hatcheries & Breeding",
      description: "High-quality poultry breeding and incubation systems across 4 farm units in Uttar Pradesh. We maintain strict biosecurity protocols and optimized temperatures to deliver strong, healthy, day-old chicks directly to commercial growers.",
      image: hatcheryImg,
      badge: "Livestock Breeding"
    },
    {
      title: "Feeds & Nutrition",
      description: "Processing and distributing premium hen feed, custom layer diets, and certified veterinary nutrition solutions. Our feeds are formulated to support hen health and maximize laying productivity in commercial setups.",
      image: feedImg,
      badge: "Formulated Feed"
    },
    {
      title: "Wholesale B2B & Logistics",
      description: "Providing direct bulk distribution agreements and logistics support for local shops, commercial poultry retail networks, and regional agro-dealers. Our customized transport fleet guarantees timely deliveries.",
      image: medicineImg,
      badge: "B2B Logistics"
    }
  ];

  return (
    <section id="operations" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Our Core Operations</h2>
          <p>Comprehensive B2B agricultural and wholesale distribution services built for reliability and scale.</p>
        </div>

        <div className="operations-grid">
          {activities.map((act, index) => (
            <div key={index} className="operation-card">
              <div className="operation-image-wrapper">
                <img 
                  src={act.image} 
                  alt={act.title} 
                  className="operation-image" 
                  loading="lazy" 
                  width="512" 
                  height="512" 
                />
                <span className="operation-badge">{act.badge}</span>
              </div>
              <div className="operation-content">
                <h3 className="operation-title">{act.title}</h3>
                <p className="operation-desc">{act.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
