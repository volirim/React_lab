import InputTextInterface from "@/types/inputTextInterface";
import "./inputText.scss";

const InputText = function ({ register, placeholder }: InputTextInterface) {
  return (
    <div className="inputWrapper">
      <input {...register} placeholder={placeholder} className="input" />
    </div>
  );
};

export default InputText;
