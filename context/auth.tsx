import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase/client";

type ContextType = {
  fbUser: User | null | undefined;
  isLoading: boolean;
};
const AuthContext = createContext<ContextType>({
  fbUser: undefined,
  isLoading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fbUser, setFbUser] = useState<User | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setFbUser(user);
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        fbUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
