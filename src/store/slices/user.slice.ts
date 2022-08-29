import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        isLoggedIn: false,
    },
    reducers: {
        setUser(state, action) {
            console.log(action.payload)
            state.user = action.payload;
        },
        setIsLoggedIn(state, action) {
            console.log(action.payload)
            state.isLoggedIn = action.payload
        }
    },
})

export const { setUser, setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;