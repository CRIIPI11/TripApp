import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: null,
    email: null,
    preferences: null,
    tripsCounter: null,
    placesVisited: null,
    isLoggedIn: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.preferences = action.payload.preferences;
            state.tripsCounter = action.payload.tripsCounter;
            state.placesVisited = action.payload.placesVisited;
            state.isLoggedIn = action.payload.isLoggedIn;
        },
        logoutUser: () => initialState
    },
});

//export const { actions, reducer } = userSlice;
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
