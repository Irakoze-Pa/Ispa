import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, LoaderCircle } from 'lucide-react';
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) { return <div className={`container ${className}`}>{children}</div>; }
export function Button({ children, variant = 'primary', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }) { return <button className={`button button-${variant}`} {...props}>{children}</button>; }
export function ButtonLink({ children, to, variant = 'primary' }: { children: ReactNode; to: string; variant?: 'primary' | 'secondary' }) { return <Link className={`button button-${variant}`} to={to}>{children}<ArrowUpRight size={17}/></Link>; }
export function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) { return <div className="section-header"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p>{children}</p>}</div>; }
export function Input(props: InputHTMLAttributes<HTMLInputElement>) { return <input className="field" {...props}/>; }
export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) { return <select className="field" {...props}/>; }
export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) { return <textarea className="field" {...props}/>; }
export function LoadingState() { return <div className="state" role="status"><LoaderCircle className="spin"/> Loading…</div>; }
export function EmptyState({ children }: { children: ReactNode }) { return <div className="state">{children}</div>; }
export function ErrorState({ children }: { children: ReactNode }) { return <div className="state" role="alert">{children}</div>; }
