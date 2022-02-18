import ChangeGameCardModal from "@/components/Modal/modals/ChangeGameCardModal/ChangeGameCardModal";
import ImageChangeModal from "@/components/Modal/modals/ImageChangeModal/ImageChangeModal";
import PasswordChangeModal from "@/components/Modal/modals/PasswordChangeModal/PasswordChangeModal";
import SignInModal from "@/components/Modal/modals/SignInModal/SignInModal";
import SignOutModal from "@/components/Modal/modals/SignOutModal/SignOutModal";
import SignUpModal from "@/components/Modal/modals/SignUpModal/SignUpModal";

interface ModalList {
  [key: string]: () => JSX.Element;
}

const MODAL_LIST: ModalList = {
  login: () => <SignInModal />,
  register: () => <SignUpModal />,
  logOut: () => <SignOutModal />,
  changePassword: () => <PasswordChangeModal />,
  changeImage: () => <ImageChangeModal />,
  editGameCard: () => <ChangeGameCardModal />,
  nothing: () => <></>,
};

export default MODAL_LIST;
