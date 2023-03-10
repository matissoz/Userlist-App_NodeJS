import axios from "axios";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  age: string;
};

export const getAllUsers = async () => {

  return await axios
    .get<User[]>(`http://localhost:3004/all-users`)
    .then(({ data }) => data);
};

export const addNewUser = async ({
  name,
  email,
  password,
  age,
}: User) => {

  return await axios.post(`http://localhost:3004/add-user`, {
    name,
    email,
    password,
    age,
  });
};

export const editUser = async ({ id, name, email, password, age }: User) => {
  
  return await axios.put(`http://localhost:3004/edit-user/${id}`, {
    name,
    email,
    password,
    age,
  });
};

export const deleteUser = async (id: string) => {
  return await axios.delete(`http://localhost:3004/delete-user/${id}`);
};
