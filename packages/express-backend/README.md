# Express backend

Users are stored in MongoDB with Mongoose. There is no in-memory user list.

## Setup

1. Copy `.env.example` to `.env` in this directory.
2. Set `MONGO_CONNECTION_STRING` to your MongoDB Atlas connection string. Do not include a database name or query string. The string should end with `/` (for example `mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/`). The app appends `users`, so the database name is `users`.
3. Install dependencies and start the API:

```bash
npm install
npm run dev
```

The `User` model (`name`, `job`) uses the `users_list` collection in the `users` database. The server listens on port 8000.
