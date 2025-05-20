import { useContext } from "react";
import { UserContext } from "../providers/UserContextProvider";
import type { UserType } from "../providers/UserContextProvider";

const User = () => {
    const { users, addUser, updateUser, deleteUser } = useContext(UserContext);

    return (
        <div>
            <h2>User Details</h2>

            {users && users.map((user: UserType) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Phone: {user.phone}</p>
                    <p>Email: {user.email ? user.email : "N/A"}</p>
                    <p>Website: {user.website ? user.website : "N/A"}</p>
                </div>
            ))}
        </div>
    );
};

export default User;
