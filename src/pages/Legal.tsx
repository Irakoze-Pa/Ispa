import { Link, useLocation } from 'react-router-dom';
import { Container } from '../components/ui';
import { site } from '../config/site';
import { usePageMeta } from '../hooks';

const updated='21 September 2026';
const contact=site.email||'our contact page';

function Section({title,children}:{title:string;children:React.ReactNode}){return <section><h2>{title}</h2>{children}</section>}
function Layout({eyebrow,title,intro,children}:{eyebrow:string;title:string;intro:string;children:React.ReactNode}){return <><header className="legal-hero"><Container><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p><span>Last updated: {updated}</span></Container></header><div className="legal-page"><Container><article>{children}<p className="legal-contact">Questions? <Link to="/contact">Contact ISPA Digital</Link>.</p></article></Container></div></>}

function PrivacyPolicy(){usePageMeta('Privacy Policy','A simple explanation of how ISPA Digital handles information submitted through this website.','/privacy-policy');return <Layout eyebrow="PRIVACY" title="Privacy Policy" intro="This page explains what information we collect and how we use it.">
 <Section title="Information we collect"><p>When you contact us or request a quote, we may collect your name, company, email, phone number and project information. The website may also collect basic technical information when analytics tools are enabled.</p></Section>
 <Section title="How we use it"><p>We use your information to answer enquiries, prepare quotations, deliver agreed services, improve the website and meet legal obligations. We do not sell your personal information.</p></Section>
 <Section title="Storage and sharing"><p>Information may be stored by trusted providers that help us operate our website, database, email and other business systems. We keep it only as long as reasonably needed and use appropriate safeguards.</p></Section>
 <Section title="Your choices"><p>You may ask to access, correct or delete your personal information where applicable. You may also withdraw consent for future marketing communication.</p></Section>
 <Section title="Contact"><p>Send privacy questions or requests through {contact}. You may also contact Rwanda’s Data Protection and Privacy Office if you have a concern.</p></Section>
 </Layout>}

function Terms(){usePageMeta('Terms & Conditions','Simple terms for using the ISPA Digital website and requesting digital services.','/terms');return <Layout eyebrow="WEBSITE TERMS" title="Terms & Conditions" intro="These terms apply when you use this website or send ISPA Digital an enquiry.">
 <Section title="Using this website"><p>Use this website lawfully. Do not attempt unauthorized access, introduce harmful code, misuse forms or copy protected content without permission.</p></Section>
 <Section title="Quotes and pricing"><p>Submitting a form does not create a contract. Website prices are starting points or recurring fees as stated. Final scope, timing, payment terms and third-party costs are confirmed in a written proposal or agreement.</p></Section>
 <Section title="Projects and content"><p>Clients must provide accurate information, timely feedback and materials they are authorized to use. Ownership and usage rights for project deliverables are defined in the applicable agreement.</p></Section>
 <Section title="Third-party services"><p>Some work may depend on hosting, domains, advertising platforms, payment providers or other third parties. Their availability, prices and terms are controlled by those providers.</p></Section>
 <Section title="General terms"><p>We aim to keep this website accurate and available, but cannot guarantee uninterrupted access. Project-specific warranties and liability terms appear in the relevant agreement. Our <Link to="/privacy-policy">Privacy Policy</Link> explains how we handle personal information.</p></Section>
 </Layout>}

export default function Legal(){return useLocation().pathname==='/terms'?<Terms/>:<PrivacyPolicy/>}
