# project
First project!

## MongoDB setup

The Express API in `packages/express-backend` stores users in MongoDB.

1. Copy `packages/express-backend/.env.example` to `packages/express-backend/.env`.
2. Put your Atlas connection string in `MONGO_CONNECTION_STRING`. Leave off the database name and any query string; the app appends `users`.
3. From `packages/express-backend`, run `npm install` and then `npm run dev`.

The database name is `users`. The `User` schema (`name`, `job`) stores documents in the `users_list` collection. See `packages/express-backend/README.md`.
