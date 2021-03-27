import React, { useContext, createContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const UserContext = createContext<any>(null);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
