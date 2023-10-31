import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import JobAdvertisement, { Advertisement } from "./components/JobAdvertisement/JobAdvertisement";
import ApiService from "./services/ApiService";
import { useDispatch, useSelector } from "react-redux";
import { setAdvertisements } from "./store/actions";
import JobAddNewAdvertisement from "./components/JobAddNewAdvertisement/JobAddNewAdvertisement";
import Task from "./components/task/Task";
import Task2 from "./components/task/Task2";
import { getAdvertisement, getAllTitles, getState } from "./selectors/selectors";
import { getAllByTitle } from "@testing-library/react";

export interface RootState {
    advertisements: Advertisement[];
}

const App = () => {
    // const [advertisements, setAdvertisements] = useState<Advertisement[]>([])
    const dispatch = useDispatch();


    // const advertisements = useSelector((state: RootState) => state.advertisements);
    const main = useSelector(getState);

    const advertisements = useSelector(getAdvertisement);
    const titles = useSelector(getAllTitles())

    console.log('main', main)
    console.log('advertisement', advertisements)
    console.log('titles', titles)

    useEffect(() => {
        const getAdvertisement = async () => {
            try {
                const result = await ApiService.getAdvertisement();
                dispatch(setAdvertisements(result));
            } catch (error) {
                console.error('api error:, error')
            }
        }
        getAdvertisement()
    }, [dispatch])
    return (
        <div className="App">
            <Header/>
            <Task2/>
            <JobAddNewAdvertisement/>
            {advertisements.map((advertisement => <JobAdvertisement key={advertisement.id}
                                                                    advertisement={advertisement}/>))}
        </div>
    )
}
export default App;
