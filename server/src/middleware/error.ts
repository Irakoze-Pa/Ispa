import type { ErrorRequestHandler, RequestHandler } from 'express';
import { ZodError } from 'zod';
export class HttpError extends Error{constructor(public status:number,message:string){super(message)}}
export const notFound:RequestHandler=(_req,_res,next)=>next(new HttpError(404,'API route not found.'));
export const errorHandler:ErrorRequestHandler=(error,_req,res,_next)=>{if(error instanceof ZodError){res.status(400).json({message:'Please check the submitted fields.',issues:error.flatten().fieldErrors});return;}if(error instanceof HttpError){res.status(error.status).json({message:error.message});return;}console.error(error);res.status(500).json({message:'Something went wrong while processing your request.'});};
