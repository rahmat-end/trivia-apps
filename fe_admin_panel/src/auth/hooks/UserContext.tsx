/** @format */

// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextProps {
  children: ReactNode;
}

const UserContext = createContext<
  | {
      user: any;
      login: (userData: any) => void;
      logout: () => void;
    }
  | undefined
>(undefined);

const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);

  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
