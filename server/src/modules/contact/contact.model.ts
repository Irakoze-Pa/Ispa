import { Schema, model } from 'mongoose';
export interface Contact {fullName:string;companyName?:string;email:string;phone?:string;service:string;budget?:string;message:string;status:'new'|'reviewed'|'closed'}
const schema=new Schema<Contact>({fullName:{type:String,required:true,trim:true},companyName:{type:String,trim:true},email:{type:String,required:true,trim:true,lowercase:true},phone:{type:String,trim:true},service:{type:String,required:true},budget:String,message:{type:String,required:true,trim:true},status:{type:String,enum:['new','reviewed','closed'],default:'new'}},{timestamps:true});
export const ContactModel=model<Contact>('Contact',schema);
