import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import InputText from "@/elements/InputText";
import onSubmitLogin from "@/utils/signInFunc";
import { SetUserStatusInterface } from "@/types/userStatusInterface";
import { UserLoginInterface } from "@/types/userData";
import ModalRoot from "@/components/modal/ModalBase";
import modal from "../../modal/modal.module.scss";

const SignInModal = function ({ updateUserStatus }: SetUserStatusInterface) {
  const { register, handleSubmit } = useForm<UserLoginInterface>();
  const signIn = async (data: UserLoginInterface) => {
    updateUserStatus(await onSubmitLogin(data));
    history.back();
  };

  const navigate = useNavigate();
  const { search } = useLocation();

  const handleClick = () => {
    const urlParams = new URLSearchParams(search);
    urlParams.delete("modal");
    return navigate(urlParams.toString());
  };

  return (
    <ModalRoot>
      <form onSubmit={handleSubmit(signIn)} className="form">
        <div onClick={handleClick} className={modal.closeButtonWrapper}>
          <div className={modal.closeButton}>
            <div className={modal.closeLeftTop} />
            <div className={modal.closeRightTop} />
          </div>
        </div>
        <label className="formTitle">Authorisation</label>
        <InputText register={register("login")} placeholder="login" type="text" />
        <InputText register={register("password")} placeholder="password" type="password" />
        <input type="submit" value="submit" className="submitFormButton" />
      </form>
    </ModalRoot>
  );
};

export default SignInModal;
