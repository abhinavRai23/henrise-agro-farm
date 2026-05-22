import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Operations from './components/Operations';
import PricingTable from './components/PricingTable';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PolicyPage from './components/PolicyPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const prevPathRef = useRef(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const prevPath = prevPathRef.current;
      prevPathRef.current = path;
      setCurrentPath(path);
      
      // Auto-scroll to top when loading a dedicated policy page
      if (path !== '/') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (path === '/' && prevPath !== '/') {
        // Just returned from a policy page to home page, scroll to hash if exists
        const hash = window.location.hash;
        if (hash) {
          const targetId = hash.slice(1);
          if (targetId) {
            const timer = setTimeout(() => {
              const el = document.getElementById(targetId);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 120);
            return () => clearTimeout(timer);
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };
    
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pushstate-navigate', handleLocationChange);
    
    // Trigger check on initial load as well
    handleLocationChange();
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate-navigate', handleLocationChange);
    };
  }, []);

  const policies = {
    terms: {
      title: "Terms & Conditions",
      content: "Welcome to HENRISE AGRO FARM website. These Terms and Conditions govern your use of our platform and commercial B2B inquiries. By accessing this website, you agree to comply with and be bound by these terms. This business is a certified Proprietorship operated under legal owner Mo Ashraf. All product listings, wholesale feed metrics, hatchery quotes, and medicine supplies are subject to seasonal market fluctuations and regional availability across our 4 farm locations. Final commercial pricing is processed inclusive of regulatory GST. Fraudulent activity, false shop registrations, or attempting to breach our payment collection network will result in immediate legal termination. Disputes are subject to the exclusive jurisdiction of the competent courts in Azamgarh, Uttar Pradesh."
    },
    privacy: {
      title: "Privacy Policy",
      content: "At HENRISE AGRO FARM, we protect your commercial data in accordance with India's digital privacy frameworks. We collect vital business markers (Proprietor name, shop details, delivery coordinates, and active mobile numbers) through our secure B2B inquiry sheets. We do not store raw credit cards, debit card numbers, or online banking passwords on our local infrastructure; all financial collection processing is securely routed through our RBI-authorized partner, Razorpay. Data is shared exclusively with verified transport logistics personnel and our payment aggregator. You maintain the right to inspect, correct, or request complete removal of your business records by emailing henriseagrofarm@gmail.com."
    },
    refund: {
      title: "Cancellation & Refund Policy",
      content: "Thank you for partnering with HENRISE AGRO FARM. Because our operational core deals with live hatchery stocks, perishable feed commodities, and regulated poultry medicines, our policy states: Hatchery allocations and live chick orders cannot be canceled or modified once incubated or loaded for logistics. Bulk feed distribution orders must be canceled within 12 hours of placing a booking request. Due to strict biological and health safety protocols, we do not accept returns on veterinary medicines or hen food bags once they leave our facility seals. In case of transit damage or inventory variance during wholesale unloading, local shop partners must report discrepancies with visual proof to our support mail within 24 hours. Valid claims will be settled directly back to the original online transaction source within 5 to 7 business days via standard Razorpay settlement procedures."
    },
    shipping: {
      title: "Shipping & Delivery Policy",
      content: "HENRISE AGRO FARM manages secure regional transport networks serving local retail shop networks from our 4 localized farm hubs. Live hatchery shipments are dispatched via customized, climate-appropriate vehicles and typically arrive at partner local shops within 24 hours of dispatch. Bulk feed distribution and poultry medicine loads are fulfilled within 2 to 5 business days depending on road route parameters to your district. Shipping tariffs are calculated transparently during contract generation based on tonnage and travel distance thresholds from our primary Azamgarh hub. Retail partners must ensure authorized stock receivers are physically present at the shop destination coordinates; our enterprise cannot assume liability for livestock loss or feed spoilage caused by delivery access failures or incorrect address listings."
    }
  };

  const validPolicyPaths = {
    '/terms-and-conditions': 'terms',
    '/privacy-policy': 'privacy',
    '/cancellation-and-refund': 'refund',
    '/shipping-and-delivery': 'shipping'
  };

  // Check if current path indicates a policy page
  const isPolicyPage = currentPath in validPolicyPaths;
  const activePolicyType = isPolicyPage ? validPolicyPaths[currentPath] : null;

  return (
    <>
      <Header isPolicyPage={isPolicyPage} />
      
      {isPolicyPage && activePolicyType ? (
        <PolicyPage
          title={policies[activePolicyType].title}
          content={policies[activePolicyType].content}
          policyType={activePolicyType}
        />
      ) : (
        <main>
          <Hero />
          <About />
          <Operations />
          <PricingTable />
          <Contact />
        </main>
      )}
      
      <Footer />
    </>
  );
}
