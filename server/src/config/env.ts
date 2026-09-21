import 'dotenv/config';
import { z } from 'zod';
const schema=z.object({PORT:z.coerce.number().default(5050),MONGODB_URI:z.string().optional(),CLIENT_ORIGIN:z.string().default('http://localhost:5173,http://localhost:5174'),AUTH_SECRET:z.string().min(32).optional(),AUTH_TOKEN_TTL_SECONDS:z.coerce.number().int().positive().default(28800)});
export const env=schema.parse(process.env);
