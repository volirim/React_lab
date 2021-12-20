import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import InputText from "@/elements/InputText";
import { SetUserStatusInterface } from "@/types/userStatusInterface";
import { UserRegisterInterface } from "@/types/userData";
import performSubmit from "./navigateConstant";
import ModalRoot from "@/components/modal/ModalBase";
import modal from "../../modal/modal.module.scss";

const SignUpModal = function ({ updateUserStatus }: SetUserStatusInterface) {
  const { register, handleSubmit } = useForm<UserRegisterInterface>();
  const navigate = useNavigate();

  const navigateFunction = async (data: UserRegisterInterface) => {
    if (await performSubmit(data)) {
      updateUserStatus(true);
      return setTimeout(() => navigate("/profile"), 300);
    }
    return false;
  };

  const { search } = useLocation();

  const handleClick = () => {
    const urlParams = new URLSearchParams(search);
    urlParams.delete("modal");
    return navigate(urlParams.toString());
  };

  return (
    <ModalRoot>
      <form onSubmit={handleSubmit(navigateFunction)} className="form">
        <div onClick={handleClick} className={modal.closeButtonWrapper}>
          <div className={modal.closeButton}>
            <div className={modal.closeLeftTop} />
            <div className={modal.closeRightTop} />
          </div>
        </div>
        <label className="formTitle">Registration</label>
        <InputText register={register("login")} placeholder="login" type="text" />
        <InputText register={register("password")} placeholder="password" type="password" />
        <InputText register={register("passwordConfirm")} placeholder="confirm password" type="password" />
        <input type="submit" value="submit" className="submitFormButton" />
      </form>
    </ModalRoot>
  );
};

export default SignUpModal;
