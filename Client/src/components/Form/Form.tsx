import { useState } from "react";

import { User } from "../../utils/apiService";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import style from "./Form.module.scss";

const initialData: User = {
  id: "",
  name: "",
  age: "",
  email: "",
  password: "",
};

type FormProps = {
  user: User | null;
  onSubmit: (data: User) => void;
};

const Form = ({ user, onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<User>(user || initialData);

  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <div>
        <Input
          label="Name:"
          required
          placeholder="e.g. Jack Smith"
          type="text"
          value={formData.name}
          onChange={(value) =>
            setFormData({
              ...formData,
              name: value,
            })
          }
        />
      </div>
      <div>
        <Input
          label="Age:"
          type="number"
          required
          placeholder="e.g. 18"
          value={formData.age}
          onChange={(value) =>
            setFormData({
              ...formData,
              age: value,
            })
          }
        />
      </div>
      <div>
        <Input
          label="Email:"
          placeholder="e.g. JackSmith@provider.com"
          type="text"
          required
          value={formData.email}
          onChange={(value) =>
            setFormData({
              ...formData,
              email: value,
            })
          }
        />
      </div>
      <div>
        <Input
          label="Password:"
          placeholder="********"
          type="password"
          required
          value={formData.password}
          onChange={(value) =>
            setFormData({
              ...formData,
              password: value,
            })
          }
        />
      </div>
      <div>
        <Button>{user ? "Edit" : "Submit"}</Button>
      </div>
    </form>
  );
};

export default Form;
