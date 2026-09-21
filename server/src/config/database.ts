import mongoose from 'mongoose';
import { env } from './env.js';
export async function connectDatabase(){if(!env.MONGODB_URI){console.warn('MONGODB_URI is not configured. Submission endpoints will return 503.');return;}await mongoose.connect(env.MONGODB_URI);console.log('MongoDB connected.');}
export const databaseReady=()=>mongoose.connection.readyState===1;
