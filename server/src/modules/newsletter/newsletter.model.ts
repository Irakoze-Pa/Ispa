import { Schema, model } from 'mongoose';
export interface NewsletterSubscriberDocument {email:string;active:boolean;source?:string;consentedAt:Date}
const schema=new Schema<NewsletterSubscriberDocument>({email:{type:String,required:true,unique:true,index:true,lowercase:true,trim:true},active:{type:Boolean,default:true},source:String,consentedAt:{type:Date,default:Date.now}},{timestamps:true});
export const NewsletterSubscriberModel=model<NewsletterSubscriberDocument>('NewsletterSubscriber',schema);
