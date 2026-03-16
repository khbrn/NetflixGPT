import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
    id: string,
    email: string | null,
    displayName?: string | null,
}

type InitialUserState = User | null;

const userSlice = createSlice({
    name: 'user',
    initialState: null as InitialUserState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            return action.payload;
        },
        removeUser: () => {
            return null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;