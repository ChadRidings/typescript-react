import { useState } from "react";
import Users from "./components/users/Users";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <>
            <div className={darkMode ? "dark" : "light"}>
                <div className="flex flex-row items-center justify-center bg-gray-100 dark:bg-gray-900 p-2">
                    <button
                        onClick={toggleDarkMode}
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>

                <Users />
            </div>
        </>
    );
}

export default App;
