import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/dataSlice';

const store = configureStore({
    reducer: {
        dataReducer: dataReducer,
    },
});

export default store;
