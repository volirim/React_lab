import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./inputText.module.scss";

interface InputTextInterface {
  register: UseFormRegisterReturn;
  placeholder: string;
  type: string;
}

const InputText = function ({ register, placeholder, type }: InputTextInterface) {
  return <input {...register} placeholder={placeholder} type={type} className={styles.input} />;
};

export default InputText;
