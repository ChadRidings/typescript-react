import { useContext } from "react";
import { UserContext } from "../providers/UserContextProvider";
import type { UserType } from "../providers/UserContextProvider";

const User = () => {
    const { users, addUser, updateUser, deleteUser } = useContext(UserContext);

    return (
        <div className="flex flex-col items-center p-5">
            <h1 className="text-3xl font-bold mb-5">User Details</h1>

            <div className="flex flex-col mb-5">
                {users && users.map((user: UserType) => (
                    <div className="flex flex-col mb-5" key={user.id}>
                        <h3 className="font-bold">{user.name}</h3>
                        <p>Phone: {user.phone}</p>
                        <p>Email: {user.email ? user.email : "N/A"}</p>
                        <p>Website: {user.website ? user.website : "N/A"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;
