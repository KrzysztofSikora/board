// actions.ts

import { createAction } from '@reduxjs/toolkit';
import { Advertisement } from '../components/JobAdvertisement/JobAdvertisement';

export const setAdvertisements = createAction<Advertisement[]>('SET_ADVERTISEMENTS');
export const addNewAdvertisements = createAction<Advertisement>('ADD_NEW_ADVERTISEMENT');