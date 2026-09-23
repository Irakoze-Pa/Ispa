import { Link } from 'react-router-dom';
import { ArrowUpRight, BarChart3, Check, Code2, Megaphone, Palette, Target, Search, ShoppingBag, Camera, MessagesSquare } from 'lucide-react';
import { ButtonLink, Container, SectionHeader } from './ui';

const offerings = [
 {icon:Megaphone,title:'Digital Marketing',slug:'digital-marketing',text:'Strategy-driven campaigns designed to increase visibility, engagement and customer acquisition.'},
 {icon:MessagesSquare,title:'Social Media Management',slug:'social-media',text:'Professional planning, content publishing and community management for a consistent presence.'},
 {icon:Camera,title:'Content Creation',slug:'content-creation',text:'Graphics, photography, videos, reels and branded content that bring your story to life.'},
 {icon:Code2,title:'Website Development',slug:'web-development',text:'Modern, responsive and conversion-focused websites built around your business.'},
 {icon:ShoppingBag,title:'E-commerce Development',slug:'ecommerce',text:'Online stores with product catalogues, customer accounts, orders and management tools.'},
 {icon:Search,title:'SEO',slug:'seo',text:'Improve search visibility and connect with customers actively looking for your services.'},
 {icon:Palette,title:'Branding & Graphic Design',slug:'branding',text:'A cohesive brand identity and professional marketing materials for every touchpoint.'},
 {icon:Target,title:'Paid Advertising',slug:'digital-marketing',text:'Meta Ads and Google Ads campaign management focused on measurable business objectives.'},
];

export function ServicesSection() {
  return <section className="corporate-section"><Container>
    <div className="section-heading-row"><SectionHeader eyebrow="OUR EXPERTISE" title="Everything your business needs to grow online.">From the first impression to the next conversion, we bring your brand, marketing and technology together.</SectionHeader><Link className="text-link" to="/services">Explore all services <ArrowUpRight size={18}/></Link></div>
    <div className="expertise-grid">{offerings.map(({icon: Icon, title, slug, text}, index) => <Link className="expertise-card" key={slug} to={`/services/${slug}`}><div className="expertise-top"><span className="service-icon"><Icon size={25}/></span><span className="service-number">0{index + 1}</span></div><h3>{title}</h3><p>{text}</p><span className="card-link">Discover the service <ArrowUpRight size={18}/></span></Link>)}</div>
  </Container></section>;
}

export function PartnershipSection() {
  return <section className="partnership-section"><Container className="partnership-grid"><div><p className="eyebrow">YOUR DIGITAL GROWTH PARTNER</p><h2>Business thinking.<br/>Creative execution.<br/><span>Lasting partnership.</span></h2><p>We combine creativity, marketing and technology to help businesses compete and grow in the digital economy.</p><ButtonLink to="/about" variant="secondary">Meet ISPA Digital</ButtonLink></div><div className="approach-list">{[
    {icon:Target,title:'Strategy before execution',text:'We start with your business, your audience and the objectives that matter to you.'},
    {icon:Code2,title:'Solutions built around you',text:'From brand identity to web applications, we connect the right tools to your business needs.'},
    {icon:BarChart3,title:'Clarity at every step',text:'A structured process, clear communication and transparent reporting keep your project moving.'},
  ].map(({icon:Icon,title,text}) => <article key={title}><Icon size={24}/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></Container></section>;
}

export function FinalCTA() {
  return <section className="final-cta"><Container className="cta-inner"><div><p className="eyebrow">LET’S BUILD YOUR NEXT CHAPTER</p><h2>Ready to grow your business?</h2><p>Let’s build a digital presence that works as hard as you do.</p></div><div><ButtonLink to="/request-quote">Start Your Project</ButtonLink><Link className="cta-contact" to="/contact">Talk to ISPA Digital <ArrowUpRight size={16}/></Link></div></Container></section>;
}

export function DigitalPreview() {
  return <div className="digital-preview" aria-label="Illustrative digital strategy workspace, not client results">
    <div className="preview-window"><div className="window-bar"><span className="window-dots"><i/><i/><i/></span><span>YOUR DIGITAL FUTURE</span><span className="window-status">● CONNECTED</span></div>
      <div className="workspace"><div className="workspace-sidebar"><span className="workspace-monogram">IS</span><div/><div/><div/></div><div className="workspace-main"><div className="workspace-title"><span>THE BIG PICTURE</span><ArrowUpRight size={20}/></div><p className="workspace-headline">Build a stronger<br/>digital presence.</p><p>One strategy. Every touchpoint.</p><div className="strategy-chart" aria-hidden="true"><div className="chart-grid"/><svg viewBox="0 0 340 100"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff6b00" stopOpacity=".22"/><stop offset="100%" stopColor="#ff6b00" stopOpacity="0"/></linearGradient></defs><path d="M0 85 C35 85 35 60 70 66 S115 72 145 48 S190 60 220 30 S265 40 295 16 L340 5 L340 100 L0 100Z" fill="url(#area)"/><path d="M0 85 C35 85 35 60 70 66 S115 72 145 48 S190 60 220 30 S265 40 295 16 L340 5" fill="none" stroke="#ff6b00" strokeWidth="3"/></svg><span>Illustrative strategy concept</span></div><div className="workspace-pillars"><span><Megaphone size={16}/> Marketing</span><span><Palette size={16}/> Creative</span><span><Code2 size={16}/> Technology</span></div></div></div>
    </div><div className="preview-caption"><span className="preview-check"><Check size={17}/></span><div><strong>Built around your business.</strong><span>From strategy to digital experience.</span></div><ArrowUpRight size={19}/></div>
  </div>;
}
