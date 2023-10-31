import { createSelector } from "reselect";
import { RootState } from "../App";
import { initialState } from "../store/reducers";


const getState = (state: RootState) => state || initialState

const getAdvertisement = (state: RootState) => state.advertisements
// const getAdvertisement = () => createSelector(mainSelect, (state) => state.advertisements)

const getAllTitles = () =>
    createSelector(getAdvertisement, (advertisement) => advertisement.map(advertisement => advertisement.title))


export {
    getState,
    getAdvertisement,
    getAllTitles
}