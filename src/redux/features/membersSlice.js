import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMembers = createAsyncThunk(
    'members/fetchMembers',
    async (path) => {
        const response = await axios.get(
            `http://localhost:5000/api/v1/${path}`
        );
        return response?.data;
    }
);

export const membersSlice = createSlice({
    name: 'members',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMembers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchMembers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(fetchMembers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.data = [];
        });
    },
});

export default membersSlice.reducer;
