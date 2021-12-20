import { Dispatch, SetStateAction } from "react";
import SignInModal from "@/components/modals/signInModal/SignInModal";
import SignOutModal from "@/components/modals/signOutModal/SignOutModal";
import SignUpModal from "@/components/modals/signUpModal/SignUpModal";

interface ModalList {
  [key: string]: ({ updateUserStatus }: PropsInterface) => JSX.Element;
}

interface PropsInterface {
  updateUserStatus: Dispatch<SetStateAction<boolean>>;
}

const MODAL_LIST: ModalList = {
  login: ({ updateUserStatus }: PropsInterface) => <SignInModal updateUserStatus={updateUserStatus} />,
  register: ({ updateUserStatus }) => <SignUpModal updateUserStatus={updateUserStatus} />,
  logOut: ({ updateUserStatus }) => <SignOutModal updateUserStatus={updateUserStatus} />,
  nothing: () => <></>,
};

export default MODAL_LIST;
