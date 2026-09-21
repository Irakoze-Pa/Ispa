import { Plus } from 'lucide-react';
import type { ServiceFAQ } from '../data/services';
export function FAQ({ items }: { items: ServiceFAQ[] }) {
 return <div className="faq-list">{items.map(item => <details key={item.question}><summary>{item.question}<Plus size={18}/></summary><p>{item.answer}</p></details>)}</div>;
}
