// SessionContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ISessionContext } from './types';

const SessionContext = createContext<ISessionContext>({
  accessToken: null,
  setAccessToken: () => {},
  logout: () => {},
});

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessTokenState] = useState<string | null>(null);


  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setAccessTokenState(token);
    }
  }, []);

  
  const setAccessToken = (token: string | null) => {
    if (token) {
      localStorage.setItem('access_token', token);
      setAccessTokenState(token);
    } else {
      localStorage.removeItem('access_token');
      setAccessTokenState(null);
    }
  };


  const logout = () => {
    localStorage.removeItem('access_token');
    setAccessTokenState(null);
  };

  return (
    <SessionContext.Provider value={{ accessToken, setAccessToken, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
