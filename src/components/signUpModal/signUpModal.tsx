import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import InputText from "@/elements/inputText";
import onSubmitRegister from "@/utils/signUpValidation";
import { SetUserStatusInterface } from "@/types/UserStatusInterface";
import { UserRegisterInterface } from "@/types/UserData";

const SignUpModal = function ({ updateUserStatus }: SetUserStatusInterface) {
  const { register, handleSubmit } = useForm<UserRegisterInterface>();
  const navigate = useNavigate();

  async function performSubmit(data: UserRegisterInterface) {
    onSubmitRegister(data, updateUserStatus);
    if (await onSubmitRegister(data, updateUserStatus)) {
      navigate("/profile");
    }
  }

  return (
    <form onSubmit={handleSubmit((data) => performSubmit(data))} className="form">
      <label className="formTitle">Registration</label>
      <InputText register={register("login")} placeholder="login" />
      <InputText register={register("password")} placeholder="password" />
      <InputText register={register("passwordConfirm")} placeholder="confirm password" />
      <input type="submit" value="submit" className="submitFormButton" />
    </form>
  );
};

export default SignUpModal;
