import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserType } from "./usersTypes";
import { fetchUsers } from "./usersThunks";

export interface UsersState {
    users: UserType[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    users: null,
    loading: false,
    error: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserType>) => {
            state.users = state.users
                ? [...state.users, action.payload]
                : [action.payload];
        },
        updateUser: (state, action: PayloadAction<string>) => {
            if (state.users) {
                state.users = state.users.map((user) =>
                    user.id === action.payload
                        ? { ...user, name: "Updated Name" }
                        : user,
                );
            }
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            if (state.users) {
                state.users = state.users.filter(
                    (user) => user.id !== action.payload,
                );
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchUsers.fulfilled,
                (state, action: PayloadAction<UserType[]>) => {
                    state.loading = false;
                    state.users = action.payload;
                },
            )
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Fetch failed";
            });
    },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
