import { useForm } from "react-hook-form";
import InputText from "@/elements/inputText";
import onSubmitLogin from "@/utils/signInValidation";
import { SetUserStatusInterface } from "@/types/UserStatusInterface";
import { UserLoginInterface } from "@/types/UserData";

const SignInModal = function ({ updateUserStatus }: SetUserStatusInterface) {
  const { register, handleSubmit } = useForm<UserLoginInterface>();
  return (
    <form onSubmit={handleSubmit((data) => onSubmitLogin(data, updateUserStatus))} className="form">
      <label className="formTitle">Authorisation</label>
      <InputText register={register("login")} placeholder="login" />
      <InputText register={register("password")} placeholder="password" />
      <input type="submit" value="submit" className="submitFormButton" />
    </form>
  );
};

export default SignInModal;
