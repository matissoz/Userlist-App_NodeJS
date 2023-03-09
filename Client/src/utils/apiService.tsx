import axios from "axios";


export type User = {
    id?: string,
    name: string,
    email: string,
    password: string,
    age: string
} 

export type ApiResponse = {
    users: User[],
    status: "success" | "failed",
}


export const getAllUsers = async () => {
    const res = await axios
     .get<ApiResponse>(`http://localhost:3004/all-users`)
     .then(({data}) => data);


    return res;
}


export const addNewUser = (async ({ name, email, password, age }: User) => {
    const res = await axios
        .post(`http://localhost:3004/add-user`, { 
            name, 
            email,
            password, 
            age 
        });


    return res.data;
}) 


export const editUser = (async ({ id, name, email, password, age }: User) => {
    const res = await axios
        .put(`http://localhost:3004/edit-user/${id}`, { 
            name, 
            email,
            password, 
            age 
        });


    return res.data;
})


export const deleteUser = (async ( id: string ) => {
    const res = await axios
        .delete(`http://localhost:3004/delete-user/${id}`);


    return res.data;
})