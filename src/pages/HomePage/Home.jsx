import React from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../../components/DoctorCards/Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {
     const allDocs = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Doctors allDocs={allDocs}></Doctors>
        </div>
    );
};

export default Home;