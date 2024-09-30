import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the API endpoints
const API_URL = 'http://localhost:5001/api/admin/contactus';

const initialState = {
    contacts: [],
    // contactDetails: null,
    loading: false,
    // error: null,
  };
  

// Async thunk for fetching all contact details
export const fetchAllContacts = createAsyncThunk(
  'adminContactUs/fetchAll',
  async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    return response.json();
  }
);

// Async thunk for fetching a contact by ID
export const fetchContactById = createAsyncThunk(
  'adminContactUs/fetchById',
  async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch contact');
    }
    return response.json();
  }
);

// Async thunk for updating a contact
export const updateContact = createAsyncThunk(
  'adminContactUs/update',
  async ({ id, contactData }) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    if (!response.ok) {
      throw new Error('Failed to update contact');
    }
    return response.json();
  }
);

// Async thunk for deleting a contact
export const deleteContact = createAsyncThunk(
  'adminContactUs/delete',
  async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete contact');
    }
    return id; // Return the ID of the deleted contact
  }
);

// Create the slice
const adminContactUsSlice = createSlice({
  name: 'adminContactUs',
initialState,
  reducers: {
    resetContactDetails: (state) => {
      state.contactDetails = null; 
    },
  },
  extraReducers: (builder) => {
   
    builder
      .addCase(fetchAllContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchAllContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
     
      .addCase(fetchContactById.fulfilled, (state, action) => {
        state.contactDetails = action.payload; 
      })
     
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
        if (index !== -1) {
          state.contacts[index] = action.payload;
        }
      })
     
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      });
  },
});


export const { resetContactDetails } = adminContactUsSlice.actions;


export default adminContactUsSlice.reducer;
