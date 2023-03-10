import { useState } from "react";

import { User } from "../../../../utils/apiService";
import Button from "../../../../common/Button/Button";
import style from "./ListItem.module.scss";

type ListItemProps = {
  user: User;
  onEdit: () => void;
  onDelete: () => void;
};

const ListItem = ({ user, onEdit, onDelete }: ListItemProps) => {
  const { name, email, password, age } = user;
  const [displayPassword, setDisplayPassword] = useState(false);

  return (
    <div className={style.listItem}>
      <span className={style.listItem__info}>
        <span className={style.listItem__infoData}>
          <h2>Name:</h2>
          <p>{name}</p>
        </span>
        <span className={style.listItem__infoData}>
          <h2>Age: </h2>
          <p>{age}</p>
        </span>
        <span className={style.listItem__infoData}>
          <h2>Email: </h2>
          <p>{email}</p>
        </span>
        <span className={style.listItem__infoData}>
          <h2> Password: </h2>
          <p className={style.password__relative}>
            <span className={style.password__absolute}>
              {displayPassword ? password : "*******"}
            </span>
          </p>
          <span>
            <Button
              onClick={() => setDisplayPassword(!displayPassword)}
              BtnStyle={"tertiary"}
            >
              View Password
            </Button>
          </span>
        </span>
      </span>
      <span className={style.listItem__buttonsWrapper}>
        <Button BtnStyle={"secondary"} onClick={() => onEdit()}>
          Edit
        </Button>
        <Button BtnStyle={"delete"} onClick={() => onDelete()}>
          Delete
        </Button>
      </span>
    </div>
  );
};

export default ListItem;
