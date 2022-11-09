import { createSlice } from '@reduxjs/toolkit';

export const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        registration: localStorage.getItem('registration')
            ? JSON.parse(localStorage.getItem('registration'))
            : [],
    },
    reducers: {
        addRegistration: (state, action) => {
            const data = action.payload;
            console.log('data', data);
            state.registration.push(data);

            localStorage.setItem(
                'registration',
                JSON.stringify(state.registration)
            );
        },

        removeRegistration: (state) => {
            state.registration = [];

            localStorage.removeItem('registration');
        },
    },
});

export const { addRegistration, removeRegistration } =
    registrationSlice.actions;

export default registrationSlice.reducer;
