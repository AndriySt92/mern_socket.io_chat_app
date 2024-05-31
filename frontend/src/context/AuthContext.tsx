import { createContext, useContext, useState } from "react";

interface IAuthContext {
    authUser: IUser | null
    setAuthUser: (user: IUser) => void
}
interface Props {
	children: React.ReactNode;
};

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: Props) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user") as string) || null);

	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};