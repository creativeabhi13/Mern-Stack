import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user : null
}

export const registerUser = createAsyncThunk('/auth/register', async (formData) => {

 const response = await axios.post('http://localhost:5001/api/auth/signup', formData,{
    withCredentials:true
 });

    return response.data;


});

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
    },
    extraReducers: (builder) => {
            builder.addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            }
            );
            builder.addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user =null;
                state.isAuthenticated = false;
            }
            
            );
            builder.addCase(registerUser.rejected, (state,action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            }
            );
    }
});


export const { setUser } = authSlice.actions;
export default authSlice.reducer;
