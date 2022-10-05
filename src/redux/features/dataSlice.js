import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
    'all_data/fetchData',
    async (path) => {
        const response = await axios.get(
            `https://fdfn-server.fdfn.net/api/v1/${path}`
        );
        return response?.data;
    }
);

export const dataSlice = createSlice({
    name: 'all_data',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.data = [];
        });
    },
});

export default dataSlice.reducer;
