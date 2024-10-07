import { useContext } from "react";
import { AuthContext } from "../components/Pages/Provider/AuthProvider";


const useAuth = () => {
    const all = useContext(AuthContext);
    return all;
};

export default useAuth;