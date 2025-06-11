import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserType } from "./usersTypes";

export const fetchUsers = createAsyncThunk<UserType[]>(
    "users/fetchUsers",
    async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    },
);
