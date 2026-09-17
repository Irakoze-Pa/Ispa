import { Container, SectionHeader } from './ui';
import { testimonials } from '../data/testimonials';
import type { Testimonial } from '../data/testimonials';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return <figure className="testimonial-card"><blockquote>{testimonial.quote}</blockquote><figcaption><strong>{testimonial.name}</strong><span>{testimonial.role} · {testimonial.company}</span></figcaption></figure>;
}
export function Testimonials() {
  if (!testimonials.length) return null;
  return <section className="corporate-section"><Container><SectionHeader eyebrow="CLIENT PERSPECTIVES" title="Partnership, in their words."/><div className="testimonials-grid">{testimonials.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial}/>)}</div></Container></section>;
}
