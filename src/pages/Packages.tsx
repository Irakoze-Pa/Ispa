import { Activity, ArrowUpRight, BarChart3, Camera, FileText, Globe2, Images, Mail, MapPin, Megaphone, PackageOpen, PenTool, Search, Server, Video, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, SectionHeader } from '../components/ui';
import { PricingCard } from '../components/GrowthSections';
import { marketingPackages, websitePackages } from '../data/packages';
const addons = [
 {name:'Domain Registration',icon:Globe2,text:'Help selecting and configuring a domain for your business.'},
 {name:'Web Hosting',icon:Server,text:'Hosting options aligned with your website’s needs and support scope.'},
 {name:'Professional Email',icon:Mail,text:'Business email setup using your domain.'},
 {name:'Website Maintenance',icon:Wrench,text:'Planned updates, monitoring and technical support.'},
 {name:'Google Analytics',icon:BarChart3,text:'Analytics setup ready for your approved measurement plan.'},
 {name:'Google Search Console',icon:Search,text:'Search performance and indexing setup for your website.'},
 {name:'Advanced SEO',icon:Activity,text:'Deeper technical, content and search visibility work.'},
 {name:'Google Business Profile',icon:MapPin,text:'Profile setup or optimization for stronger local discovery.'},
 {name:'Photography',icon:Camera,text:'Purposeful business, team, product and campaign photography.'},
 {name:'Videography',icon:Video,text:'Video content planned around your channels and message.'},
 {name:'Copywriting',icon:FileText,text:'Clear website, campaign and business copy in your brand voice.'},
 {name:'Product Upload',icon:PackageOpen,text:'Structured product entry for your e-commerce catalogue.'},
 {name:'Brand Identity',icon:PenTool,text:'A practical visual identity system for consistent communication.'},
 {name:'Landing Pages',icon:Images,text:'Focused pages designed around a campaign or conversion goal.'},
 {name:'Lead Generation Campaigns',icon:Megaphone,text:'Campaign planning and management for qualified enquiries.'},
];
export default function Packages() {
 return <><section className="page-hero"><Container><p className="eyebrow">PACKAGES & PRICING</p><h1>A clear starting point for <span>meaningful growth.</span></h1><p>Choose a package that fits your current priorities. We confirm the final scope, responsibilities and investment before work begins.</p></Container></section><section className="packages-block marketing-packages"><Container><SectionHeader eyebrow="DIGITAL MARKETING" title="Build a consistent digital presence.">Monthly options for businesses ready to communicate clearly, publish consistently and make more informed marketing decisions.</SectionHeader><div className="pricing-grid">{marketingPackages.map(plan=><PricingCard key={plan.name} plan={plan}/>)}</div><p className="pricing-note"><strong>Advertising budgets are separate.</strong> Budgets paid to Meta, Google or other platforms are not included in ISPA Digital management fees.</p></Container></section><section className="packages-block"><Container><SectionHeader eyebrow="WEBSITE DEVELOPMENT" title="Invest in a website built for your business.">Starting packages provide a useful scope for planning. Integrations, content volume and specialist requirements are confirmed in your proposal.</SectionHeader><div className="pricing-grid">{websitePackages.map(plan=><PricingCard key={plan.name} plan={plan} website/>)}</div><p className="pricing-note">Website prices are starting estimates. Final scope, third-party services and ongoing costs are confirmed before development.</p></Container></section><section className="addons-section"><Container><SectionHeader eyebrow="ADD-ON SERVICES" title="Complete the digital foundation.">Choose only what supports the project. Add-ons are scoped and priced according to your requirements.</SectionHeader><div className="addons-grid">{addons.map(({name,icon:Icon,text})=><article key={name}><Icon size={22}/><h3>{name}</h3><p>{text}</p></article>)}</div></Container></section><section className="services-cta"><Container><p className="eyebrow">NEED A DIFFERENT COMBINATION?</p><h2>Tell us what you want to achieve. We’ll shape the right scope.</h2><Link className="button button-primary" to="/request-quote">Request a Custom Quote <ArrowUpRight size={17}/></Link></Container></section></>;
}
