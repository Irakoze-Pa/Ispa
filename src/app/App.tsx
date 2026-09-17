import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer, WhatsAppButton } from '../components/Footer';
import { LoadingState } from '../components/ui';
import { services } from '../config/site';
const Foundation = lazy(() => import('../pages/Foundation')); const Placeholder = lazy(() => import('../pages/Placeholder')); const NotFound = lazy(() => import('../pages/NotFound'));
function Layout() { const {pathname} = useLocation(); useEffect(() => { window.scrollTo(0,0); const names: Record<string,string> = {'/':'Build. Grow. Stand Out.','/about':'About','/services':'Services','/projects':'Projects','/packages':'Packages','/blog':'Insights','/contact':'Contact','/request-quote':'Request a Quote','/privacy-policy':'Privacy Policy','/terms':'Terms & Conditions'}; const name = names[pathname] || services.find(([,slug]) => pathname === `/services/${slug}`)?.[0] || (pathname.startsWith('/blog/') ? 'Article Preview' : 'Page Not Found'); document.title = `${name} | ISPA Digital`; },[pathname]); return <><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main"><Suspense fallback={<LoadingState/>}><Routes><Route path="/" element={<Foundation/>}/>{['/about','/services','/projects','/packages','/blog','/blog/:slug','/contact','/request-quote','/privacy-policy','/terms',...services.map(([,slug]) => `/services/${slug}`)].map(path => <Route key={path} path={path} element={<Placeholder/>}/>)}<Route path="*" element={<NotFound/>}/></Routes></Suspense></main><Footer/><WhatsAppButton/></>; }
export default function App() { return <BrowserRouter><Layout/></BrowserRouter>; }
