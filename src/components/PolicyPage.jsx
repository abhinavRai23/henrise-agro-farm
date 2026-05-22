import React from 'react';
import { ArrowLeft, FileText, CheckCircle2, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { navigate } from '../router';

export default function PolicyPage({ title, content, policyType }) {
  // Breadcrumb label based on policy type
  const getBreadcrumb = () => {
    switch (policyType) {
      case 'terms':
        return 'Terms & Conditions';
      case 'privacy':
        return 'Privacy Policy';
      case 'refund':
        return 'Cancellation & Refund Policy';
      case 'shipping':
        return 'Shipping & Delivery Policy';
      default:
        return title;
    }
  };

  // Render a specific icon based on policy type
  const getPolicyIcon = () => {
    switch (policyType) {
      case 'terms':
        return <ShieldCheck className="policy-header-icon" size={32} />;
      case 'privacy':
        return <FileText className="policy-header-icon" size={32} />;
      case 'refund':
        return <RefreshCw className="policy-header-icon" size={32} />;
      case 'shipping':
        return <Truck className="policy-header-icon" size={32} />;
      default:
        return <FileText className="policy-header-icon" size={32} />;
    }
  };

  // Structured breakdown sections to make it look premium and readable rather than a block of text
  const getStructuredContent = () => {
    switch (policyType) {
      case 'terms':
        return [
          {
            heading: "1. Acceptance of Terms",
            text: "Welcome to HENRISE AGRO FARM. By accessing this website and using our commercial B2B inquiry tools, you agree to follow and be legally bound by these Terms & Conditions. If you do not agree, please do not use our services."
          },
          {
            heading: "2. Constitution & Ownership",
            text: "HENRISE AGRO FARM is a certified Proprietorship business, operated under the sole legal ownership of Mo Ashraf. All operations, contracts, and sales invoices are issued in compliance with Indian commercial law and trade regulations."
          },
          {
            heading: "3. Scope of Commercial Operations",
            text: "We list wholesale chick hatchery metrics, poultry feed parameters, and veterinary medicine allocations across our 4 regional farm locations in Uttar Pradesh. Descriptions and specifications are for trade evaluation and contract bidding."
          },
          {
            heading: "4. Pricing & GST Registration",
            text: "All catalog prices, bulk contract proposals, and shipping quotes are subject to market adjustments and will explicitly include the mandatory GST (GSTIN: 09EGEPA6608E1ZN) in the final commercial invoice."
          },
          {
            heading: "5. Restrictions & Fraud Prevention",
            text: "You are prohibited from submitting false shop registrations, using fake corporate email addresses, or attempting to intercept or manipulate our digital payment collection endpoints. Violations will result in immediate termination of B2B access."
          },
          {
            heading: "6. Legal Jurisdiction",
            text: "These terms and all commercial transactions shall be governed by Indian law. Any legal disputes or claims arising out of or in connection with our services will be subject to the exclusive jurisdiction of the competent courts in Azamgarh, Uttar Pradesh."
          }
        ];
      case 'privacy':
        return [
          {
            heading: "1. Information We Collect",
            text: "We collect essential business parameters through our secure B2B contact forms, including contact person name, retail shop/corporate identity, regional delivery coordinates, and active mobile numbers."
          },
          {
            heading: "2. Purpose of Collection",
            text: "Your data is used solely to verify your retail shop registration, establish delivery routing, generate wholesale contracts, and follow up on wholesale queries. We do not use your information for spam or unrelated marketing."
          },
          {
            heading: "3. Payment Security & Aggregation",
            text: "To protect our business partners, HENRISE AGRO FARM does not store or process card numbers, banking credentials, or wallet PINs on our servers. All transaction details are directly and securely routed through Razorpay, our RBI-approved payment aggregator partner."
          },
          {
            heading: "4. Data Sharing Policy",
            text: "We share your business information only with our verified transportation/logistics staff and payment gateways to fulfill contracts. We will never sell, lease, or distribute your corporate data to external third parties."
          },
          {
            heading: "5. Security Measures",
            text: "We use modern secure socket layers (SSL/TLS), database encryption, and strict access controls to shield your records. Only authorized compliance administrators and logistics coordinators can access our backend sheets."
          },
          {
            heading: "6. Your Rights & Access Control",
            text: "You hold full rights to inspect, update, or request complete removal of your business record from our databases. For any data inquiries or cleanup requests, contact our privacy desk at henriseagrofarm@gmail.com."
          }
        ];
      case 'refund':
        return [
          {
            heading: "1. Perishable Commodities & Live Stocks",
            text: "Due to the specialized nature of our agricultural inventory—specifically day-old live chicks, temperature-sensitive vaccines, and fresh animal feed bags—strict biosafety and commercial rules apply."
          },
          {
            heading: "2. Live Hatchery Bookings",
            text: "Orders for day-old chicks and live hatchery allocations cannot be canceled, rescheduled, or refunded once eggs are placed in the incubator or loaded into climate-controlled vehicles."
          },
          {
            heading: "3. Bulk Feed & Medicine Orders",
            text: "Wholesale feed distribution bookings may be canceled with full refund options only if requested within 12 hours of placing the initial contract request. Veterinary medicines cannot be returned once security seals are broken."
          },
          {
            heading: "4. Transit Damage & Discrepancies",
            text: "If there is a shortage or damage during transport delivery, the receiving retail partner must document the variance with visual evidence and file a complaint via email (henriseagrofarm@gmail.com) within 24 hours of delivery."
          },
          {
            heading: "5. Settlement Timeline",
            text: "Approved refunds for valid transit damage or order shortages will be processed directly back to the original payment source (credit card, bank account, or wallet) via Razorpay within 5 to 7 business days."
          }
        ];
      case 'shipping':
        return [
          {
            heading: "1. Distribution & Farm Logistics",
            text: "HENRISE AGRO FARM manages structured transport fleets serving retail shop partners and distribution centers directly from our 4 primary farm units in Uttar Pradesh."
          },
          {
            heading: "2. Live Chick Transit",
            text: "Live poultry chicks are shipped in specialized, ventilated, temperature-regulated trucks to ensure survival. Dispatches are scheduled for overnight or early morning travel, reaching destination shops within 24 hours of setup."
          },
          {
            heading: "3. Feed & Medicine Deliveries",
            text: "Standard dry feed bags and sealed veterinary supplies are shipped via bulk logistics and are delivered within 2 to 5 business days, depending on distance and road permissions to your district."
          },
          {
            heading: "4. Shipping Calculations",
            text: "Logistics charges are calculated based on weight (tonnage) and road distance from our central hub in Azamgarh. Detailed transport rates are detailed and locked during the B2B contract generation phase."
          },
          {
            heading: "5. Receiving Responsibilities",
            text: "Partners must ensure that authorized staff are available to unload feed bags and house live chicks immediately upon vehicle arrival. We are not liable for spoilage or livestock loss caused by unloading delays or incorrect shipping coordinates."
          }
        ];
      default:
        return [{ heading: "Policy details", text: content }];
    }
  };

  const sections = getStructuredContent();

  return (
    <div className="policy-page-wrapper">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="policy-breadcrumbs" aria-label="Breadcrumb">
          <div className="breadcrumb-main">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{getBreadcrumb()}</span>
          </div>
          
          <div className="breadcrumb-mobile-links">
            <a href="/terms-and-conditions" className={policyType === 'terms' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('/terms-and-conditions'); }}>Terms &amp; Conditions</a>
            <a href="/privacy-policy" className={policyType === 'privacy' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('/privacy-policy'); }}>Privacy Policy</a>
            <a href="/cancellation-and-refund" className={policyType === 'refund' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('/cancellation-and-refund'); }}>Cancellation &amp; Refund Policy</a>
            <a href="/shipping-and-delivery" className={policyType === 'shipping' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('/shipping-and-delivery'); }}>Shipping &amp; Delivery Policy</a>
          </div>
        </nav>

        {/* Policy Header Box */}
        <div className="policy-header-card">
          <div className="policy-header-icon-container">
            {getPolicyIcon()}
          </div>
          <div className="policy-header-info">
            <h1>{title}</h1>
            <p className="policy-meta">
              Effective Date: April 16, 2026 | Henrise Agro Farm Legal Compliance
            </p>
          </div>
        </div>

        {/* Policy Content Card */}
        <div className="policy-content-card">
          <div className="policy-sections">
            {sections.map((section, index) => (
              <div key={index} className="policy-section-block">
                <h2 className="policy-section-title">{section.heading}</h2>
                <p className="policy-section-text">{section.text}</p>
              </div>
            ))}
          </div>

          <div className="policy-compliance-box">
            <h3>Compliance &amp; Verification Notice</h3>
            <p>
              This policy is maintained by <strong>HENRISE AGRO FARM</strong> (Proprietor: Mo Ashraf) to satisfy legal frameworks and Razorpay merchant guidelines. If you have any inquiries regarding these policies or need clarification on bulk contracts, please contact us:
            </p>
            <ul className="compliance-contact-list">
              <li>
                <strong>Registered Trade Name:</strong> HENRISE AGRO FARM
              </li>
              <li>
                <strong>GSTIN:</strong> 09EGEPA6608E1ZN
              </li>
              <li>
                <strong>Corporate Email:</strong> <a href="mailto:henriseagrofarm@gmail.com">henriseagrofarm@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Back to Home CTA */}
          <div className="policy-back-cta">
            <a href="/" className="btn btn-primary" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
              <ArrowLeft size={16} /> Return to Home Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
