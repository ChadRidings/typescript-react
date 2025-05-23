import { useState, useEffect } from "react";
import type { UserType } from "../types";
import { UserContext } from "../context";

interface UserContextProviderProps {
    children: React.ReactNode;
}

export const UserContextProvider = (props: UserContextProviderProps) => {
    const [users, setUsers] = useState<UserType[] | null>(null);
    const [fetchError, setFetchError] = useState<boolean | null>(null);

    // Function to add a user
    const addUser = (user: UserType) => {
        setUsers(users ? [...users, user] : [user]);
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

    if (fetchError) {
        return <div className="text-red-500 p-5">Error fetching users</div>;
    }

    if (!users) {
        return <div className="p-5">Loading users...</div>;
    }

    return (
        <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
            {props.children}
        </UserContext.Provider>
    );
};
