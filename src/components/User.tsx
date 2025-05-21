import { useContext } from "react";
import { UserContext } from "../providers/UserContextProvider";
import type { UserType } from "../providers/UserContextProvider";

const User = () => {
    const { users, addUser, updateUser, deleteUser } = useContext(UserContext);

    return (
        <div className="flex flex-col items-start p-5 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-5 text-teal-500">User Details</h1>

            <div className="flex flex-col mb-5">
                {users && users.map((user: UserType) => (
                    <div className="flex flex-col mb-5" key={user.id}>
                        <h3 className="font-bold">{user.name}</h3>
                        <p>Email: {user.email ? <a href={`mailto:${user.email}`} className="text-sky-500 italic">{user.email}</a> : "N/A"}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Website: {user.website ? <a href={`//${user.website}`} title={user.website} className="text-sky-500 italic" target="_blank">{user.website}</a> : "N/A"}</p>
                        <div className="flex flex-row">
                            <p className="mr-1">Address:</p>
                            <p>
                                {user.address.street}, {user.address.suite ? user.address.suite : ''}<br />
                                {user.address.city}, {user.address.zipcode}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;
