import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // giả sử mặc định là chưa đăng nhập

  return (
      <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
        {children}
      </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
