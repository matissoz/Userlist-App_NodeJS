import { User } from "../../utils/apiService";
import ListItem from "./components/ListItem/ListItem";
import style from "./List.module.scss";

type ListProps = {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
};

const List = ({ users, onEdit, onDelete }: ListProps) => (
  <>
    {users.length == 0 ? (
      <div className={style.list__empty}>No user has been added yet!</div>
    ) : (
      <div className={style.list}>
        {users.map((user) => (
          <ListItem
            key={user.id}
            user={user}
            onEdit={() => {
              onEdit(user);
            }}
            onDelete={() => {
              onDelete(user.id);
            }}
          />
        ))}
      </div>
    )}
  </>
);

export default List;
