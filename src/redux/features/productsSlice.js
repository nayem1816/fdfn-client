import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (path) => {
        const response = await axios.get(
            `https://fdfn-server-v2.vercel.app/api/v1/${path}`
        );
        return response?.data;
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.data = [];
        });
    },
});

export default productsSlice.reducer;
