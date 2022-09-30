import { configureStore } from '@reduxjs/toolkit';
import adminReducer from '../features/adminSlice';

const store = configureStore({
    reducer: {
        adminReducer: adminReducer,
    },
});

export default store;
