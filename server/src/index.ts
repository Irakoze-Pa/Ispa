import { app } from './app.js';
import { connectDatabase } from './config/database.js';
import { env } from './config/env.js';

await connectDatabase();
const server=app.listen(env.PORT,()=>console.log(`ISPA API listening on port ${env.PORT}`));
const shutdown=()=>server.close(()=>process.exit(0));
process.on('SIGTERM',shutdown);
process.on('SIGINT',shutdown);
