import { UserRegisterInterface } from "@/types/userData";
import onSubmitRegister from "@/utils/signUpFunc";

async function performSubmit(data: UserRegisterInterface) {
  await onSubmitRegister(data);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const status = JSON.parse(localStorage.getItem("authorised")!);
  return status;
}

export default performSubmit;
