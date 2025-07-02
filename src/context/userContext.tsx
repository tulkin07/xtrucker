// UserContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { IUser, IUserContext } from './types';

const defaultValue: IUserContext = {
  user: null,
  setUser: () => {},
};

const UserContext = createContext<IUserContext>(defaultValue);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

// Custom hook
export const useUser = () => useContext(UserContext);
