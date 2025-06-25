import type { UserType } from "../../features/users/usersTypes";

const UserCard = ({ user }: { user: UserType }) => {
    return (
        <div className="flex flex-col mb-5">
            <h3 className="font-bold">{user.name}</h3>
            <p>
                Email: {user.email ? (
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
            <p>
                Phone: {user.phone ? user.phone : "N/A"}
            </p>
            <p>
                Website: {user.website ? (
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
    );
};

export default UserCard;
