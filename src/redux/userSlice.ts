import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface UserState {
    data: User | null,
}

const initialState: UserState =  {
    data: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.data = action.payload;
        },
        removeUser: (state) => {
            state.data = initialState.data;
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;