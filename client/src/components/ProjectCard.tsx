import { useEffect, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { Project } from '../data/projects';
import { ButtonLink } from './ui';
export function ProjectArtwork({theme}:{theme:string}) {
 return <div className={`project-art project-art-${theme}`} aria-hidden="true">{theme==='commerce'?<><span className="art-wordmark">FORM / STUDIO</span><div className="product-shape"/><span className="art-caption-text">Everyday objects.<br/>Considered design.</span></>:theme==='brand'?<><span className="brand-symbol">A</span><strong>AMANI</strong><span>SPACE TO SLOW DOWN</span></>:theme==='growth'?<><span className="growth-top">GROWTH / WITH DIRECTION</span><div className="growth-chart"><i/><i/><i/><i/><i/></div><strong>Move with<br/>purpose.</strong></>:theme==='stories'?<><span className="stories-label">FIELD NOTES / 01</span><div className="stories-bottle"/><strong>Made to be<br/>remembered.</strong></>:<><span className="campaign-tag">MAKE ROOM FOR</span><strong>something<br/>different.</strong><div className="campaign-circle"/><span className="campaign-bottom">YOUR NEXT CHAPTER STARTS HERE ↗</span></>}</div>;
}
export function ProjectCard({project,onOpen}:{project:Project;onOpen:(project:Project)=>void}) {
 return <button className="project-card" onClick={()=>onOpen(project)} aria-label={`View sample concept: ${project.name}`}><ProjectArtwork theme={project.theme}/><div className="project-info"><span>{project.category} <em>SAMPLE CONCEPT</em></span><h3>{project.name}<ArrowUpRight size={19}/></h3></div></button>;
}
export function ProjectDialog({project,onClose}:{project:Project|null;onClose:()=>void}) {
 const ref=useRef<HTMLDialogElement>(null);useEffect(()=>{const dialog=ref.current;if(project&&!dialog?.open)dialog?.showModal();},[project]);
 return <dialog ref={ref} className="detail-dialog" aria-labelledby="project-detail-title" onClose={onClose} onClick={event=>{if(event.target===event.currentTarget)ref.current?.close();}}><button className="dialog-close" aria-label="Close project details" onClick={()=>ref.current?.close()}><X/></button>{project&&<><p className="eyebrow">SAMPLE CONCEPT / {project.category}</p><h2 id="project-detail-title">{project.name}</h2><p className="dialog-client">{project.client}</p><ProjectArtwork theme={project.theme}/><p>{project.description}</p><h3>Concept services</h3><ul>{project.services.map(service=><li key={service}>{service}</li>)}</ul><ButtonLink to="/request-quote">Discuss a similar project</ButtonLink></>}</dialog>;
}
