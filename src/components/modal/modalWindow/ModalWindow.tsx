import SignUpModal from "@/components/modals/signUpModal/SignUpModal";
import SignInModal from "@/components/modals/signInModal/SignInModal";
import SignOutModal from "@/components/modals/signOutModal/SignOutModal";
import content from "./modalWindow.module.scss";
import { SetUserStatusInterface } from "@/types/userStatusInterface";

// eslint-disable-next-line consistent-return
const ModalWindow = function ({ updateUserStatus }: SetUserStatusInterface) {
  const location = window.location.pathname;
  if (location === "/login") {
    return (
      <div className={content.container}>
        <SignInModal updateUserStatus={updateUserStatus} />
      </div>
    );
  }
  if (location === "/exit") {
    return (
      <div className={content.container}>
        <SignOutModal updateUserStatus={updateUserStatus} />
      </div>
    );
  }
  return (
    <div className={content.container}>
      <SignUpModal updateUserStatus={updateUserStatus} />
    </div>
  );
};

export default ModalWindow;
