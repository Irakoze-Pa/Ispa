import express from 'express';
import cors from 'cors';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { env } from './config/env.js';
import { contactRouter } from './modules/contact/contact.routes.js';
import { quoteRouter } from './modules/quote/quote.routes.js';
import { authRouter } from './modules/auth/auth.routes.js';
import { adminRouter } from './modules/admin/admin.routes.js';
import { errorHandler, notFound } from './middleware/error.js';

export const app=express();
app.disable('x-powered-by');
app.use((_req,res,next)=>{res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');res.setHeader('Permissions-Policy','camera=(), microphone=(), geolocation=()');next()});
app.use(cors({origin:env.CLIENT_ORIGIN.split(',').map(origin=>origin.trim())}));
app.use(express.json({limit:'50kb'}));
app.get('/api/health',(_req,res)=>res.json({status:'ok'}));
app.use('/api/contact',contactRouter);
app.use('/api/quotes',quoteRouter);
app.use('/api/auth',authRouter);
app.use('/api/admin',adminRouter);
app.use('/api',notFound);

if(env.NODE_ENV==='production'){
 const webRoot=resolve(fileURLToPath(new URL('.',import.meta.url)),'../../client/dist');
 app.use(express.static(webRoot,{maxAge:'1d',setHeaders:(res,file)=>{if(file.includes('/assets/'))res.setHeader('Cache-Control','public, max-age=31536000, immutable')}}));
 app.use((req,res,next)=>{if(req.method==='GET'&&req.accepts('html')){res.setHeader('Cache-Control','no-cache');res.sendFile(resolve(webRoot,'index.html'));return}next()});
}
app.use(notFound);
app.use(errorHandler);
