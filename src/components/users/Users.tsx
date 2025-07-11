import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../features/users/usersThunks";
import { selectUsers, selectUsersLoading, selectUsersError } from "../../features/users/usersSelectors";
import type { AppDispatch } from "../../store";
import type { UserType } from "../../features/users/usersTypes";
import UserCard from "./UserCard";

const Users = () => {
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
                <UserCard
                    key={user.id}
                    user={user}
                />
            ))}
        </div>
    );
};

export default Users;
