import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../components/ui';
import { ProjectCard, ProjectDialog } from '../components/ProjectCard';
import { projectCategories, sampleProjects } from '../data/projects';
import type { Project } from '../data/projects';
export default function Projects() {
 const [category,setCategory]=useState<(typeof projectCategories)[number]>('All'); const [selected,setSelected]=useState<Project|null>(null);
 const projects=useMemo(()=>category==='All'?sampleProjects:sampleProjects.filter(project=>project.category===category),[category]);
 return <><section className="page-hero"><Container><p className="eyebrow">SELECTED POSSIBILITIES</p><h1>Ideas designed to <span>move business forward.</span></h1><p>Explore sample concepts across websites, marketing, branding, social media and content. Every item is clearly marked because these are design demonstrations, not client achievements.</p></Container></section><section className="portfolio-page"><Container><div className="portfolio-filter" role="group" aria-label="Filter sample projects">{projectCategories.map(item=><button key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}</div><p className="portfolio-count">{projects.length.toString().padStart(2,'0')} SAMPLE {projects.length===1?'CONCEPT':'CONCEPTS'}</p><div className="portfolio-grid">{projects.map(project=><ProjectCard project={project} onOpen={setSelected} key={project.id}/>)}</div><ProjectDialog project={selected} onClose={()=>setSelected(null)}/></Container></section><section className="services-cta"><Container><p className="eyebrow">YOUR BUSINESS IS UNIQUE</p><h2>Let’s create a direction built around it.</h2><a className="button button-primary" href="/request-quote">Start Your Project <ArrowUpRight size={17}/></a></Container></section></>;
}
