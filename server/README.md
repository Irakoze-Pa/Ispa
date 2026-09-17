# Backend architecture reservation

The Express + TypeScript backend begins in Phase 6. Phase 1 does not expose an API or simulate successful submissions.

Planned structure: `src/config`, `src/middleware`, `src/modules/{auth,contact,quote,blog,project,service,newsletter}`. Each module will own its models, validation, services, controllers and routes. MongoDB, Cloudinary and email credentials remain server-only. Authentication and role protection will precede admin routes.
