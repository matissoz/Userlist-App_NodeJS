import { addUser, deleteUser, editUser, getAllUsers } from './dbService';
import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));


app.get("/all-users", async (req: Request, res: Response) => {
  let allUsers;

  try{
    allUsers = await getAllUsers();
  } catch(e) {

    return res.send({ ...e, status: "failed" }) 
  }

  return res.send({ users: [...allUsers], status: "success" }) 
});



app.post("/add-user", async (req: Request, res: Response) => {
  let addNewUser
  const { name, email, password, age } = req.body;
  
  try {
    addNewUser = await addUser( name, email, password, age )
  } catch(e) {

    return res.send({ ...e, status: "failed" })
  }
    
  return res.send({ ...addNewUser, status: "success" });
}); 


app.put("/edit-user/:id", async (req: Request, res: Response) => {
  let editedUser
  const id = req.params.id 
  const { name, email, password, age } = req.body;

  try {
    editedUser = await editUser( name, email, password, age, id )
  } catch(e) {

    return res.send({ ...e, status: "failed" })
  }

  return res.send({ ...editedUser, status: "success" });
});


app.delete("/delete-user/:id", async (req: Request, res: Response) => {
  let deletedUser
  const id = req.params.id 

  try {
    deletedUser = await deleteUser( id )
  } catch(e) {

    return res.send({ ...e, status: "failed" })
  }

  return res.send({ ...deletedUser, status: "success" });
});


app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
