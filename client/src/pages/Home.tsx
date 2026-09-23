import { ArrowDown, Check } from 'lucide-react';
import { ButtonLink, Container } from '../components/ui';
import { DigitalPreview, FinalCTA, ServicesSection } from '../components/HomeSections';

import { FeaturedProjects, InsightsSection, PricingSection, ProcessSection, ValueSection, WebsiteShowcase, WhySection } from '../components/GrowthSections';

export default function Home() {
  return <>
    <section className="corporate-hero"><Container>
      <div className="corporate-hero-grid"><div className="corporate-hero-copy">
        <p className="eyebrow"><span className="accent-dot"/> DIGITAL GROWTH & TECHNOLOGY PARTNER</p>
        <h1>Grow your business<br/>in the <span>digital world.</span></h1>
        <p className="hero-description">We help businesses build stronger brands, reach more customers and grow through digital marketing, creative content and modern technology.</p>
        <div className="hero-actions"><ButtonLink to="/request-quote">Start Your Project</ButtonLink><ButtonLink to="/services" variant="secondary">Explore Our Services</ButtonLink></div>
        <div className="hero-assurances"><span><Check size={14}/> Strategy-led</span><span><Check size={14}/> Business-focused</span><span><Check size={14}/> Built for growth</span></div>
      </div><DigitalPreview/></div>
      <div className="corporate-hero-bottom"><span>Based in Kigali, Rwanda. <strong>Built for your ambition.</strong></span><a href="#expertise">Discover what we do <ArrowDown size={15}/></a></div>
    </Container></section>
    <div className="capabilities-strip"><Container><span>STRATEGY</span><i/><span>CREATIVITY</span><i/><span>MARKETING</span><i/><span>TECHNOLOGY</span><i/><span>DATA & INSIGHTS</span></Container></div>
    <ValueSection/>
    <div id="expertise"><ServicesSection/></div>
    <WhySection/>
    <WebsiteShowcase/>
    <FeaturedProjects/>
    <PricingSection/>
    <ProcessSection/>
    <InsightsSection/>
    <FinalCTA/>
  </>;
}
