import { createReducer } from '@reduxjs/toolkit';
import {addNewAdvertisements, setAdvertisements} from './actions';
import {Advertisement} from "../components/JobAdvertisement/JobAdvertisement";

export const initialState = {
    advertisements: [] as Advertisement[],
};

const rootReducer = createReducer(initialState, (builder) => {
    builder.addCase(setAdvertisements, (state, action) => {
        state.advertisements = action.payload;
    });
    builder.addCase(addNewAdvertisements, (state, action) => {
        state.advertisements = [...state.advertisements, action.payload]
    });
});

export default rootReducer;