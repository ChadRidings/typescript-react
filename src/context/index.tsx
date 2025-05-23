import { createContext } from "react";
import type { UserContextType } from "../types";

const userContextInitialValues: UserContextType = {
    users: null,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null,
};

export const UserContext = createContext<UserContextType>(userContextInitialValues);
