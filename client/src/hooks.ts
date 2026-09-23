import { useEffect } from 'react';
const siteName='ISPA Digital';
export function usePageMeta(title:string,description:string,path:string,type='website'){
 useEffect(()=>{document.title=`${title} | ${siteName}`;const set=(selector:string,attr:string,value:string)=>{let element=document.querySelector<HTMLMetaElement>(selector);if(!element){element=document.createElement('meta');const [name,key]=selector.includes('property=')?['property',selector.match(/"(.+)"/)?.[1]||'']:['name',selector.match(/"(.+)"/)?.[1]||''];element.setAttribute(name,key);document.head.append(element)}element.setAttribute(attr,value)};set('meta[name="description"]','content',description);set('meta[property="og:title"]','content',title);set('meta[property="og:description"]','content',description);set('meta[property="og:type"]','content',type);let canonical=document.querySelector<HTMLLinkElement>('link[rel="canonical"]');if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.append(canonical)}const base=import.meta.env.VITE_SITE_URL||window.location.origin;canonical.href=`${base}${path}`;set('meta[property="og:url"]','content',canonical.href);},[title,description,path,type]);
}

export function useStructuredData(id:string,data:Record<string,unknown>){
 useEffect(()=>{const existing=document.getElementById(id);existing?.remove();const element=document.createElement('script');element.type='application/ld+json';element.id=id;element.text=JSON.stringify(data);document.head.append(element);return()=>element.remove()},[id,data]);
}
