import { site } from '../config/site';
export class ApiError extends Error { constructor(message:string, public status:number){super(message);} }
export async function postJson<T>(path:string,data:unknown):Promise<T>{
 const response=await fetch(`${site.apiUrl}${path}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
 const payload=await response.json().catch(()=>({message:'The server returned an unreadable response.'})) as {message?:string}&T;
 if(!response.ok)throw new ApiError(payload.message||'Your request could not be submitted.',response.status);
 return payload;
}
