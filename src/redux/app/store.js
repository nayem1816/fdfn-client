import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/dataSlice';
import registrationReducer from '../features/registrationSlice';
import productsReducer from '../features/productsSlice';
import membersReducer from '../features/membersSlice';

const store = configureStore({
    reducer: {
        dataReducer: dataReducer,
        registrationReducer: registrationReducer,
        productsReducer: productsReducer,
        membersReducer: membersReducer,
    },
});

export default store;
