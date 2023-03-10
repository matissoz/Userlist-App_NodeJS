import { addUser, deleteUser, editUser, getAllUsers } from "./dbService";
import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/all-users", async (req: Request, res: Response) => {
  try {
    const allUsers = await getAllUsers();
    res.send(allUsers);
  } catch (e) {
    throw Error(e);
  }
});

app.post("/add-user", async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;

  try {
    const addNewUser = await addUser(name, email, password, age);
    res.send(addNewUser);
  } catch (e) {
    throw Error(e);
  }
});

app.put("/edit-user/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, email, password, age } = req.body;

  try {
    const editedUser = await editUser(name, email, password, age, id);
    res.send(editedUser);
  } catch (e) {
    throw Error(e);
  }
});

app.delete("/delete-user/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const deletedUser = await deleteUser(id);
    return res.send(deletedUser);
  } catch (e) {
    throw Error(e);
  }
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
