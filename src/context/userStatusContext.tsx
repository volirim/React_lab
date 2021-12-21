import React, { useMemo, useState } from "react";

interface UserStatusContextInterface {
  userStatus: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setUserStatus: Function;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const UserStatusContext = React.createContext<UserStatusContextInterface>({
  userStatus: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserStatus: () => {},
});

export const UserStatusContextProvider = function ({ children }: unknown) {
  const status = JSON.parse(localStorage.getItem("authorised")!);
  const [userStatus, setUserStatus] = useState<boolean>(status);

  const memorizeStatus = useMemo(() => ({ userStatus, setUserStatus }), [userStatus, setUserStatus]);
  return <UserStatusContext.Provider value={memorizeStatus}>{children}</UserStatusContext.Provider>;
};

export default UserStatusContext;
