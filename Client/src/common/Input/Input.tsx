import { v4 as uuidv4 } from "uuid";

import style from "./Input.module.scss";

type Props = {
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
  value: string;
  minLength?: number;
  maxLength?: number;
  autocomplete?: "off" | "on";
  onChange: (value: string) => void;
};

const uniqueId = uuidv4();

const Input = ({
  label,
  type,
  value,
  placeholder,
  required,
  minLength,
  maxLength,
  onChange,
  autocomplete = "off",
}: Props) => {
  return (
    <label htmlFor={uniqueId} className={style.wrapper}>
      <span className={style.label}>{label}</span>
      <input
        autoComplete={autocomplete}
        className={style.input}
        type={type}
        id={uniqueId}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </label>
  );
};

export default Input;
