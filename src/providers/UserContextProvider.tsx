import { createContext, useState, useEffect } from "react";

export interface UserType {
    id: string;
    name: string;
    phone: string;
    email: string;
    website: string;
    address: {
        city: string;
        street: string;
        suite: string;
        zipcode: string;
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    username: string;
    age: number;
    isMarried: boolean;
}

interface UserContextType {
    users: UserType[] | null;
    addUser: (user: UserType) => void;
    updateUser: (id: string) => void;
    deleteUser: (id: string) => void;
}

const userContextInitialValues: UserContextType = {
    users: null,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null,
};

export const UserContext = createContext<UserContextType>(userContextInitialValues);

interface UserContextProviderProps {
    children: React.ReactNode;
}

export const UserContextProvider = (props: UserContextProviderProps) => {
    const [users, setUsers] = useState<UserType[] | null>(null);
    const [fetchError, setFetchError] = useState<boolean | null>(null);

    // Function to add a user
    const addUser = (user: UserType) => {
        if (users) {
            setUsers([...users, user]);
        } else {
            setUsers([user]);
        }
    };

    // Function to delete a user
    const deleteUser = (id: string) => {
        if (users) {
            const filteredUsers = users.filter((user) => user.id !== id);
            setUsers(filteredUsers);
        }
    };

    // Function to update a user
    const updateUser = (id: string) => {
        if (users) {
            const updatedUsers = users.map((user) => {
                if (user.id === id) {
                    return { ...user, name: "Updated Name" }; // Example update
                }
                return user;
            });
            setUsers(updatedUsers);
        }
    };

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setFetchError(false);
            setUsers(data);
          } catch (error) {
            console.error("Error fetching users:", error);
            setFetchError(true);
          }
        };
        fetchUsers();
    }, []);

    return (
        <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
            {props.children}
        </UserContext.Provider>
    );
};
