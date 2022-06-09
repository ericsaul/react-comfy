import { useContext, createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    console.log(`user: ${user}`);
    console.log(`isAuthenticate: ${isAuthenticated}`);
    console.log(`isLoading: ${isLoading}`);
  }, [isAuthenticated]);

  return (
    <UserContext.Provider
      value={{
        loginWithRedirect,
        logout,
        myUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserContext;
