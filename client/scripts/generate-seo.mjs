import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
const base=process.env.SITE_URL?.replace(/\/$/,'');if(!base)throw new Error('Set SITE_URL to the production origin before generating sitemap.xml.');
const output=process.env.SEO_OUTPUT_DIR||fileURLToPath(new URL('../public',import.meta.url));await mkdir(output,{recursive:true});
const staticPaths=['/','/about','/services','/projects','/packages','/blog','/contact','/request-quote','/privacy-policy','/terms'];
const servicePaths=['digital-marketing','social-media','content-creation','web-development','ecommerce','seo','branding'].map(slug=>`/services/${slug}`);
const articlePaths=['start-with-a-business-goal','what-a-business-website-needs','consistent-brand-beyond-logo'].map(slug=>`/blog/${slug}`);
const paths=[...staticPaths,...servicePaths,...articlePaths];const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(path=>`  <url><loc>${base}${path}</loc></url>`).join('\n')}\n</urlset>\n`;await writeFile(join(output,'sitemap.xml'),xml);await writeFile(join(output,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);console.log(`Generated SEO files for ${base} in ${output}`);
