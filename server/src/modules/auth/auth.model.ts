import { Schema, model } from 'mongoose';
export type UserRole='admin'|'editor';
export interface UserDocument {email:string;name:string;role:UserRole;passwordHash:string;passwordSalt:string;active:boolean;lastLoginAt?:Date}
const schema=new Schema<UserDocument>({email:{type:String,required:true,unique:true,index:true,lowercase:true,trim:true},name:{type:String,required:true,trim:true},role:{type:String,enum:['admin','editor'],required:true,default:'editor'},passwordHash:{type:String,required:true,select:false},passwordSalt:{type:String,required:true,select:false},active:{type:Boolean,default:true},lastLoginAt:Date},{timestamps:true});
export const UserModel=model<UserDocument>('User',schema);
