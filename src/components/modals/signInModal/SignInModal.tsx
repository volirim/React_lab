import { useForm } from "react-hook-form";
import InputText from "@/elements/InputText";
import onSubmitLogin from "@/utils/signInFunc";
import { SetUserStatusInterface } from "@/types/userStatusInterface";
import { UserLoginInterface } from "@/types/userData";
import ModalRoot from "@/components/modal/ModalBase";

const SignInModal = function ({ updateUserStatus }: SetUserStatusInterface) {
  const { register, handleSubmit } = useForm<UserLoginInterface>();
  const signIn = async (data: UserLoginInterface) => {
    updateUserStatus(await onSubmitLogin(data));
    history.back();
  };

  return (
    <ModalRoot>
      <form onSubmit={handleSubmit(signIn)} className="form">
        <label className="formTitle">Authorisation</label>
        <InputText register={register("login")} placeholder="login" type="text" />
        <InputText register={register("password")} placeholder="password" type="password" />
        <input type="submit" value="submit" className="submitFormButton" />
      </form>
    </ModalRoot>
  );
};

export default SignInModal;
