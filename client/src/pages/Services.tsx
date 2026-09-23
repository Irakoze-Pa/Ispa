import { ArrowUpRight, Camera, Code2, Megaphone, MessagesSquare, Palette, Search, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui';
import { serviceDetails } from '../data/services';
const icons = [Megaphone, MessagesSquare, Camera, Code2, ShoppingBag, Search, Palette];
export default function Services() {
 return <><section className="page-hero services-hero"><Container><p className="eyebrow">OUR SERVICES</p><h1>Everything your business needs to <span>grow online.</span></h1><p>Strategy, creative execution and technology—connected around your business, your customers and the next step you want them to take.</p></Container></section><section className="service-index"><Container><div className="service-index-grid">{serviceDetails.map((service,index)=>{const Icon=icons[index];return <Link to={`/services/${service.slug}`} key={service.slug} className="service-index-card"><div><span>0{index+1}</span><Icon size={26}/></div><h2>{service.name}</h2><p>{service.summary}</p><strong>Explore service <ArrowUpRight size={17}/></strong></Link>})}</div></Container></section><section className="services-cta"><Container><p className="eyebrow">NOT SURE WHERE TO START?</p><h2>Let’s identify the right digital priorities for your business.</h2><Link className="button button-primary" to="/request-quote">Start a conversation <ArrowUpRight size={17}/></Link></Container></section></>;
}
