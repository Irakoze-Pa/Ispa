import { site } from '../config/site';
export class ApiError extends Error { constructor(message:string, public status:number){super(message);} }
export async function postJson<T>(path:string,data:unknown):Promise<T>{
 let response:Response;
 try{response=await fetch(`${site.apiUrl}${path}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});}catch{throw new ApiError('We could not reach the server. Please try again shortly.',0);}
 const type=response.headers.get('content-type')||'';
 const payload=type.includes('application/json')?await response.json() as {message?:string}&T:null;
 if(!response.ok)throw new ApiError(payload?.message||(response.status>=500?'Our server is temporarily unavailable. Please try again shortly.':'Your request could not be submitted.'),response.status);
 if(!payload)throw new ApiError('The server returned an unexpected response.',response.status);
 return payload;
}
