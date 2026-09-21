import { Schema, model } from 'mongoose';
export interface ServiceDocument {name:string;slug:string;summary:string;content:{heading:string;body:string}[];status:'draft'|'published';order:number}
const schema=new Schema<ServiceDocument>({name:{type:String,required:true,trim:true},slug:{type:String,required:true,unique:true,index:true},summary:{type:String,required:true},content:[{heading:{type:String,required:true},body:{type:String,required:true}}],status:{type:String,enum:['draft','published'],default:'draft'},order:{type:Number,default:0}},{timestamps:true});
export const ServiceModel=model<ServiceDocument>('Service',schema);
