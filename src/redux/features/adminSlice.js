import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAdmin = createAsyncThunk('admin/fetchAdmin', async (path) => {
    const response = await axios.get(`http://localhost:5000/api/v1/${path}`);
    return response?.data;
});

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAdmin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchAdmin.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(fetchAdmin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.data = [];
        });
    },
});

export default adminSlice.reducer;
