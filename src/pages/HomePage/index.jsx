import React from 'react';
import Sidebar from '../../components/Sidebar';
import MainPanel from '../../components/MainPanel';

import './HomePage.css';

const HomePage = () => {

    return (
        <div className="home-page">
            <Sidebar />
            <MainPanel title="Content Type Builder"/>
        </div>
    );
}

export default HomePage;