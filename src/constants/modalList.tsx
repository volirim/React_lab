import ImageChangeModal from "@/components/modals/ImageChangeModal/ImageChangeModal";
import PasswordChangeModal from "@/components/modals/PasswordChangeModal/PasswordChangeModal";
import SignInModal from "@/components/modals/SignInModal/SignInModal";
import SignOutModal from "@/components/modals/SignOutModal/SignOutModal";
import SignUpModal from "@/components/modals/SignUpModal/SignUpModal";

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
