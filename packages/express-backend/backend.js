import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {
  addUser,
  deleteUserById,
  findUserById,
  getUsers,
} from "./services/user-service.js";

dotenv.config();

const app = express();
const port = 8000;

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

mongoose.set("debug", true);
mongoose.connect(MONGO_CONNECTION_STRING + "users").catch((error) => {
  console.error(error);
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;

  getUsers(name, job)
    .then((result) => {
      res.send({ users_list: result });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred in the server.");
    });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  findUserById(id)
    .then((result) => {
      if (result === null) {
        res.status(404).send("Resource not found.");
      } else {
        res.send(result);
      }
    })
    .catch((error) => {
      console.error(error);
      if (error.name === "CastError") {
        res.status(404).send("Resource not found.");
      } else {
        res.status(500).send("An error occurred in the server.");
      }
    });
});

app.post("/users", (req, res) => {
  const userToAdd = req.body;

  addUser(userToAdd)
    .then((newUser) => {
      res.status(201).send(newUser);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred in the server.");
    });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  deleteUserById(id)
    .then((result) => {
      if (result === null) {
        res.status(404).send("Resource not found.");
      } else {
        res.status(204).send();
      }
    })
    .catch((error) => {
      console.error(error);
      if (error.name === "CastError") {
        res.status(404).send("Resource not found.");
      } else {
        res.status(500).send("An error occurred in the server.");
      }
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
