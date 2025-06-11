import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../features/users/usersThunks";
import { selectUsers, selectUsersLoading, selectUsersError } from "../features/users/usersSelectors";
import type { AppDispatch } from "../store";
import type { UserType } from "../features/users/usersTypes";

const User = () => {
    const dispatch = useDispatch<AppDispatch>();

    const users = useSelector(selectUsers);
    const loading = useSelector(selectUsersLoading);
    const error = useSelector(selectUsersError);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <div className="p-5">Loading users...</div>;
    }
    if (error) {
        return <div className="text-red-500 p-5">Error: {error}</div>;
    }
    if (!users || users.length === 0) {
        return <div className="p-5">No users found.</div>;
    }

    return (
        <div className="flex flex-col items-start p-5 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-5 text-teal-500">
                User Details
            </h1>

            {users.map((user: UserType) => (
                <div key={user.id} className="flex flex-col mb-5">
                    <h3 className="font-bold">{user.name}</h3>
                    <p>
                        Email:{" "}
                        {user.email ? (
                            <a
                                href={`mailto:${user.email}`}
                                className="text-sky-500 italic"
                            >
                                {user.email}
                            </a>
                        ) : (
                            "N/A"
                        )}
                    </p>
                    <p>Phone: {user.phone}</p>
                    <p>
                        Website:{" "}
                        {user.website ? (
                            <a
                                href={`//${user.website}`}
                                title={user.website}
                                className="text-sky-500 italic"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {user.website}
                            </a>
                        ) : (
                            "N/A"
                        )}
                    </p>
                    <div className="flex flex-row">
                        <p className="mr-1">Address:</p>
                        <p>
                            {user.address.street}, {user.address.suite}
                            <br />
                            {user.address.city}, {user.address.zipcode}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default User;
