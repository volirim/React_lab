import ImageChangeModal from "@/components/modals/imageChangeModal/ImageChangeModal";
import PasswordChangeModal from "@/components/modals/passwordChangeModal/PasswordChangeModal";
import SignInModal from "@/components/modals/signInModal/SignInModal";
import SignOutModal from "@/components/modals/signOutModal/SignOutModal";
import SignUpModal from "@/components/modals/signUpModal/SignUpModal";

interface ModalList {
  [key: string]: () => JSX.Element;
}

const MODAL_LIST: ModalList = {
  login: () => <SignInModal />,
  register: () => <SignUpModal />,
  logOut: () => <SignOutModal />,
  changePassword: () => <PasswordChangeModal />,
  changeImage: () => <ImageChangeModal />,
  nothing: () => <></>,
};

export default MODAL_LIST;
