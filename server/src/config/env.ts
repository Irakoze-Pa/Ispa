import 'dotenv/config';
import { z } from 'zod';
const schema=z.object({PORT:z.coerce.number().default(5050),MONGODB_URI:z.string().optional(),CLIENT_ORIGIN:z.string().default('http://localhost:5173,http://localhost:5174')});
export const env=schema.parse(process.env);
