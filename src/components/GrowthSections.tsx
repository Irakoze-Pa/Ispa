import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, CheckCheck, ChevronRight, Code2, Gauge, Lightbulb, Monitor, Paintbrush, Smartphone, Target, TrendingUp, X } from 'lucide-react';
import { ButtonLink, Container, SectionHeader } from './ui';
import { marketingPackages, websitePackages } from '../data/packages';
import type { Package } from '../data/packages';
import { sampleProjects } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectCard, ProjectDialog } from './ProjectCard';

export function ValueSection() {
 const values = [{name:'Strategy',icon:Target},{name:'Creativity',icon:Paintbrush},{name:'Marketing',icon:TrendingUp},{name:'Technology',icon:Code2},{name:'Data',icon:Gauge}];
 return <section className="value-section"><Container><div><p className="eyebrow">YOUR DIGITAL GROWTH PARTNER</p><h2>One partner. A connected approach.</h2><p>We bring strategy, creativity, marketing, technology and data together to help your business grow.</p></div><div className="value-grid">{values.map(({name,icon:Icon})=><div key={name}><Icon size={22}/><span>{name}</span></div>)}</div></Container></section>;
}

export function WhySection() {
 const reasons = [
  {title:'Strategy First',text:'Every decision starts with your business objectives and audience.',icon:Target},
  {title:'Creative Execution',text:'Design and content that give your brand a clear, consistent voice.',icon:Paintbrush},
  {title:'Modern Technology',text:'Practical, scalable tools designed around the way you work.',icon:Code2},
  {title:'Business-Focused Solutions',text:'Digital experiences built to support meaningful business outcomes.',icon:Lightbulb},
  {title:'Transparent Reporting',text:'Understand what is happening, what we learn and what comes next.',icon:Gauge},
  {title:'Long-Term Partnership',text:'A collaborative approach that evolves alongside your business.',icon:CheckCheck},
 ];
 return <section className="why-section"><Container><SectionHeader eyebrow="WHY ISPA DIGITAL" title="More than a digital agency.">A thoughtful partner for the decisions, experiences and opportunities that shape your business.</SectionHeader><div className="why-grid">{reasons.map(({title,text,icon:Icon})=><article key={title}><Icon size={24}/><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>;
}

export function WebsiteShowcase() {
 return <section className="website-section"><Container className="website-grid"><div><SectionHeader eyebrow="WEBSITE DEVELOPMENT" title="Your website should work for your business.">A professional website is more than a digital address. It connects your brand with the people who need it, and makes the next step easy.</SectionHeader><div className="website-benefits">{['Fast','Responsive','SEO-friendly','Secure','Professional','Easy to navigate','Conversion-focused','Scalable'].map(label=><span key={label}><Check size={15}/>{label}</span>)}</div><ButtonLink to="/request-quote?service=web-development">Build My Website</ButtonLink></div><div className="website-art"><div className="mock-browser"><div className="mock-toolbar"><i/><i/><i/><span>YOUR NEXT WEBSITE</span></div><div className="mock-nav"><strong>YOUR BRAND<span>®</span></strong><span>Discover · Our story · Contact</span></div><div className="mock-content"><p>DESIGNED WITH PURPOSE</p><strong>A better experience.<br/>At every click.</strong><span className="mock-button">Explore your possibilities <ArrowUpRight size={13}/></span><div className="mock-shapes"><div/><div/><div/></div></div><div className="mock-cards"><div/><div/><div/></div></div><div className="mock-phone"><Smartphone size={18}/><strong>Built for<br/>every screen.</strong><span/><span/><span/></div><p className="art-caption">Illustrative website concept</p></div></Container></section>;
}


export function FeaturedProjects() {
 const [selected,setSelected]=useState<Project|null>(null);
 return <section className="corporate-section projects-section"><Container><div className="section-heading-row"><SectionHeader eyebrow="DESIGN POSSIBILITIES" title="See what your next chapter could look like.">Sample concepts illustrate our design direction. They are not client projects or verified business results.</SectionHeader><Link className="text-link" to="/projects">Explore projects <ArrowUpRight size={18}/></Link></div><div className="project-grid">{sampleProjects.slice(0,3).map(project=><ProjectCard project={project} onOpen={setSelected} key={project.id}/>)}</div><ProjectDialog project={selected} onClose={()=>setSelected(null)}/></Container></section>;
}

export function PricingCard({plan,website=false}:{plan:Package;website?:boolean}) {
 const custom=plan.price==='Custom quote';
 return <article className={`pricing-card ${plan.recommended?'recommended':''}`}><div className="pricing-label">{plan.recommended?'RECOMMENDED OPTION':website?'WEBSITE DEVELOPMENT':'DIGITAL MARKETING'}</div><h3>{plan.name}</h3><p className="plan-description">{plan.description}</p><div className="plan-price">{custom?<strong>Custom quote</strong>:<><strong>{plan.price}</strong><span>RWF {plan.period}</span></>}</div><ButtonLink to={`/request-quote?package=${encodeURIComponent(plan.name)}`} variant={plan.recommended?'primary':'secondary'}>{custom?'Request Custom Quote':`Choose ${plan.name}`}</ButtonLink><ul>{plan.features.map(feature=><li key={feature}><Check size={14}/>{feature}</li>)}</ul></article>;
}
export function PricingSection() {
 return <><section className="pricing-section"><Container><SectionHeader eyebrow="DIGITAL MARKETING PACKAGES" title="A clear plan for your digital growth.">Choose the level of support that fits your business. Every package brings consistency, creativity and a defined scope.</SectionHeader><div className="pricing-grid">{marketingPackages.map(plan=><PricingCard key={plan.name} plan={plan}/>)}</div><p className="pricing-note"><strong>Advertising budgets are separate.</strong> Budgets paid to Meta, Google or other platforms are not included in ISPA Digital management fees.</p></Container></section><section className="corporate-section"><Container><SectionHeader eyebrow="WEBSITE DEVELOPMENT PACKAGES" title="Built for where your business is going.">From a focused business website to a custom platform, start with a scope that works for you.</SectionHeader><div className="pricing-grid">{websitePackages.map(plan=><PricingCard key={plan.name} plan={plan} website/>)}</div><p className="pricing-note">Website prices are starting estimates. Final scope, integrations and costs are confirmed in your project proposal.</p></Container></section></>;
}

const steps=[
 {name:'Discover',text:'We listen first. Together, we explore your business, audience, current digital presence and the objectives that matter most.',deliverable:'A shared understanding of your goals.',icon:Target},
 {name:'Strategize',text:'We turn those insights into an actionable direction, with the right service mix, project scope and priorities for your business.',deliverable:'A clear strategy and project plan.',icon:Lightbulb},
 {name:'Create',text:'We develop the visual identity, content, campaigns and digital experiences that bring your strategy to life, with room for your feedback.',deliverable:'Purposeful creative and technical execution.',icon:Paintbrush},
 {name:'Launch',text:'We prepare, review and publish your campaigns, website or digital solution, keeping the agreed scope and launch requirements in view.',deliverable:'A coordinated launch with essential checks.',icon:Monitor},
 {name:'Grow',text:'We measure, learn and refine. Reporting and optimization help you understand performance and make informed decisions about the next step.',deliverable:'Insights and a direction for continuous improvement.',icon:TrendingUp},
];
export function ProcessSection() {
 const [active,setActive]=useState(0); const step=steps[active]; const Icon=step.icon;
 return <section className="process-section"><Container><SectionHeader eyebrow="HOW WE WORK" title="A clear path from ambition to action.">A collaborative five-step process keeps your goals at the center.</SectionHeader><div className="process-controls" aria-label="Explore our process">{steps.map((item,index)=><button key={item.name} aria-pressed={active===index} aria-controls="process-detail" onClick={()=>setActive(index)}><span>0{index+1}</span>{item.name}<ChevronRight size={16}/></button>)}</div><div id="process-detail" className="process-detail" aria-live="polite"><div><Icon size={37}/><span>0{active+1}</span></div><div><h3>{step.name}</h3><p>{step.text}</p><strong><Check size={15}/>{step.deliverable}</strong></div><button aria-label={`Go to ${steps[(active+1)%steps.length].name} step`} onClick={()=>setActive((active+1)%steps.length)}><ArrowRight size={23}/></button></div></Container></section>;
}

const insights=[
 {category:'Digital Marketing',title:'Start with a business goal, not a posting schedule.',text:'A practical starting point for a more purposeful digital strategy.',body:'Before choosing a platform or planning content, define the outcome you want to support. Is it awareness, qualified enquiries or repeat purchases? Identify your audience, clarify the action you want them to take, and choose a few useful measures. Build your content around those decisions, then review what you learn. Consistency works best when it serves a clear purpose.',icon:Target},
 {category:'Web Development',title:'What a business website needs to get right.',text:'Clarity, usability and a simple next step make a stronger first impression.',body:'Your homepage should explain what you do, who you help and how to get in touch. Keep navigation straightforward and make essential information easy to find on a phone. Use clear service descriptions, accessible controls and purposeful calls to action. Test the enquiry journey before launch. A polished design should support a useful experience from the first visit to the next conversation.',icon:Code2},
 {category:'Branding',title:'A consistent brand goes beyond your logo.',text:'Create a recognizable experience at every business touchpoint.',body:'A logo is one part of your identity. Typography, color, imagery, layout and tone of voice help people recognize your business across your website, social channels and printed materials. Document a small set of practical rules, build reusable templates and review new content against them. A consistent identity gives your team a clearer direction and your audience a more coherent experience.',icon:Paintbrush},
];
export function InsightsSection() {
 const [active,setActive]=useState(0);const dialog=useRef<HTMLDialogElement>(null);
 return <section className="corporate-section"><Container><div className="section-heading-row"><SectionHeader eyebrow="INSIGHTS" title="Ideas for your next move.">Practical perspectives on building a stronger digital presence.</SectionHeader><Link className="text-link" to="/blog">Explore the blog <ArrowUpRight size={18}/></Link></div><div className="insights-grid">{insights.map((article,index)=>{const Icon=article.icon;return <article className="insight-card" key={article.title}><div className={`insight-art insight-art-${index}`} aria-hidden="true"><Icon size={58}/><span>ISPA / INSIGHTS</span></div><div><span className="eyebrow">{article.category}</span><h3>{article.title}</h3><p>{article.text}</p><button className="text-link" onClick={()=>{setActive(index);dialog.current?.showModal();}}>Read insight <ArrowUpRight size={16}/></button></div></article>;})}</div><dialog className="detail-dialog insight-dialog" ref={dialog} aria-labelledby="insight-title"><button className="dialog-close" aria-label="Close insight" onClick={()=>dialog.current?.close()}><X/></button><p className="eyebrow">{insights[active].category} / ISPA DIGITAL</p><h2 id="insight-title">{insights[active].title}</h2><p>{insights[active].body}</p><ButtonLink to="/contact">Discuss your digital presence</ButtonLink></dialog></Container></section>;
}
