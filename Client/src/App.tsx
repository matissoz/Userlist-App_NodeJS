import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";

import {
  addNewUser,
  deleteUser,
  editUser,
  getAllUsers,
  User,
} from "./utils/apiService";
import style from "./App.module.scss";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const queryClient = useQueryClient();

  const { isLoading: GetAllUsersLoading, data } = useQuery({
    queryKey: ["usersData"],
    queryFn: getAllUsers,
    keepPreviousData: true,
  });

  const { isLoading: AddUserLoading, mutate: AddUser } = useMutation({
    mutationFn: addNewUser,
    onSuccess: () => {
      queryClient.invalidateQueries("usersData");
    },
  });

  const { isLoading: EditUserLoading, mutate: EditUser } = useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      queryClient.invalidateQueries("usersData");
    },
  });

  const { isLoading: DeleteUserLoading, mutate: DeleteUser } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries("usersData");
    },
  });

  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState<User | null>(null);

  if (GetAllUsersLoading || AddUserLoading || EditUserLoading || DeleteUserLoading) {
    return (
      <div className={style.app}>
        <div className={style.app__loading}>
          <Spinner/>
        </div>
      </div>
    );
  }

  if (!data) {
    throw Error("Something went wrong!");
  }

  return (
    <div className={style.app}>
      <Header onModalOpen={setOpenModal} />
      <main className={style.main}>
        <List
          users={data}
          onEdit={(user) => {
            setEditData(user);
            setOpenModal(true);
          }}
          onDelete={async (id) => {
            await DeleteUser(id);
          }}
        />
      </main>
      <Footer />
      {openModal && (
        <Modal
          onClose={() => {
            setOpenModal(false);
            setEditData(null)
          }}
        >
          <Form
            user={editData}
            onSubmit={async (formData) => {
              if (editData) {
                await EditUser(formData);
              } else {
                await AddUser(formData);
              }
              setEditData(null)
              setOpenModal(false);
            }}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
