import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
 messageList: [],
};

export const addNewQuery = createAsyncThunk(
  "/contact/addNewQuery",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5001/api/shop/contactus/add",
      formData
    );
    return response.data;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewQuery.fulfilled, (state,) => {
        state.isLoading = false;
       
      })
      .addCase(addNewQuery.rejected, (state, ) => {
        state.isLoading = false;
    
      });
  },
});



export default contactSlice.reducer;
