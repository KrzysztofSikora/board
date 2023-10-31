import React, { MouseEventHandler, SyntheticEvent, useState } from 'react';
import './JobAdvertisement.scss';

export interface Advertisement {
    id: string;
    title: string;
    salary: number;
    description: string;
    category: string;
    url: string;
}

export interface JobAdvertisementProps {
    advertisement: Advertisement;
}

const JobAdvertisement: React.FC<JobAdvertisementProps> = ({advertisement}) => {

    const [h2Class, setH2Class] = useState('job__title');


    const handleClick = (event: SyntheticEvent) => setH2Class(h2Class === 'job__title' ? 'job__title--color' : 'job__title');


    return (
        <div className="job__advertisement">
            <h2 className={h2Class}>{advertisement.title}</h2>
            <p className="job__salary">${advertisement.salary.toLocaleString()}</p>
            <p className="job__description">{advertisement.description}</p>
            <p className="job__category">{advertisement.category}</p>
            <a className="job__url" href={advertisement.url} target="_blank" rel="noopener noreferrer">
                Apply Now
            </a>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default JobAdvertisement;