import express from "express";
const app = express();
import cors from "cors";
import { getUser, getUserbyId, createUser } from "./database.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/users", async (req, res) => {
  const data = await getUser();
  res.send(data);
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const data = await getUserbyId(id);
  res.send(data);
});

app.post("/users", async (req, res) => {
  const { name, location, about, bio, followers_count, connection_count, url } =
    await req.body;
  console.log(req.body);
  const data = await createUser(
    name,
    location,
    about,
    bio,
    followers_count,
    connection_count,
    url
  );
  res.send(data);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
