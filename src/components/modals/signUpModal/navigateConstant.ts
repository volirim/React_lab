import { UserRegisterInterface } from "@/types/userData";
import onSubmitRegister from "@/utils/SignUpFunc";

async function performSubmit(data: UserRegisterInterface) {
  await onSubmitRegister(data);
  const status = JSON.parse(localStorage.getItem("authorised")!);
  if (status) {
    return true;
  }
  return false;
}

export default performSubmit;
