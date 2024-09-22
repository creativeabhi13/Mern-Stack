import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login(state, action) {
        //     state.isAuthenticated = true;
        //     state.user = action.payload;
        // },
        // logout(state) {
        //     state.isAuthenticated = false;
        //     state.user = null;
        // }
        setUser :(state, action) => {
           
        }
    }
});


export const { setUser } = authSlice.actions;
export default authSlice.reducer;
