import React from 'react';
import './JobAddNewAdvertisement.scss';
import {useDispatch} from "react-redux";
import {addNewAdvertisements} from "../../store/actions";
import {Advertisement} from "../JobAdvertisement/JobAdvertisement";

const JobAddNewAdvertisement: React.FC = () => {
    const newAdvertisement: Advertisement = {
        id: '9',
        title:"New advertisement Front-end Developer",
        salary:70000,
        description:"Poszukujemy doświadczonego front-end developera...",
        category:"IT",
        url:"https://example.com/job/1"
    }

    const dispach = useDispatch();
    const handleClickButton = () => {
        dispach(addNewAdvertisements(newAdvertisement))

    }
    return (
        <div className="job-add-new-advertisement">
           <button onClick={handleClickButton}>add something new to store</button>
        </div>
    );
};

export default JobAddNewAdvertisement;