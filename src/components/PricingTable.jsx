import React from 'react';
import { BadgeCheck, Info } from 'lucide-react';

export default function PricingTable() {
  const catalog = [
    {
      category: "High-Protein Hen Food / Layer Feed",
      specification: "Premium feed formulated for optimal egg quality and bird health.",
      unit: "50 Kg Bag",
      price: "Daily Market Rate"
    },
    {
      category: "Day-Old Premium Hatchery Chicks",
      specification: "Vaccinated, high-survival rate commercial breed chicks.",
      unit: "Wholesale Pack",
      price: "Daily Market Rate"
    },
    {
      category: "Certified Poultry Nutrition & Medicines",
      specification: "Regulatory approved antibiotics, multivitamins, and growth promoters.",
      unit: "As per order",
      price: "Custom Quote"
    }
  ];

  return (
    <section id="pricing" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2>B2B Wholesale Catalog</h2>
          <p>Real-time wholesale product parameters. Due to market factors, commodity prices are updated daily.</p>
        </div>

        <div className="pricing-container">
          <div className="table-responsive">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Wholesale Category</th>
                  <th>Product Specification</th>
                  <th>Standard Packaging</th>
                  <th className="price-header">Pricing Model</th>
                </tr>
              </thead>
              <tbody>
                {catalog.map((item, index) => (
                  <tr key={index}>
                    <td className="product-name">
                      <div className="name-with-icon">
                        <BadgeCheck size={18} className="table-check-icon" />
                        <span>{item.category}</span>
                      </div>
                    </td>
                    <td className="product-spec">{item.specification}</td>
                    <td className="product-unit">{item.unit}</td>
                    <td className="product-price">
                      <span className={item.price === 'Custom Quote' ? 'price-badge quote' : 'price-badge daily'}>
                        {item.price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pricing-disclaimer">
            <Info size={20} className="info-icon" />
            <p>
              <strong>Daily Fluctuation Notice:</strong> Like commodity stocks, poultry feed grain markets and live chick hatchery values shift daily based on seasonal demand, ingredient exchange rates, and transport index parameters. All billing is cleared in Indian Rupees (INR) inclusive of GST. Please submit the form below or contact our sales desk for today's active rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
