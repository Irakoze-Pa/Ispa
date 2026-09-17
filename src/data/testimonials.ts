export interface Testimonial { id: string; name: string; role: string; company: string; quote: string; }
// Add only approved, genuine client feedback. The homepage section stays hidden while empty.
export const testimonials: Testimonial[] = [];
