import React, { useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import makeRequest from '../../utils/makeRequest';
import { GET_CONTENT_TYPES } from '../../common/endpoints';
import MainPanel from '../../components/MainPanel';

import './HomePage.css';

const HomePage = () => {

    const [contentTypes, setContentTypes] = React.useState();

    useEffect(() => {
        makeRequest(GET_CONTENT_TYPES)
            .then((res) => {
                console.log(res);
                setContentTypes(res);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="home-page">
            <Sidebar contentTypes={contentTypes}/>
            <MainPanel title="Content Type Builder" contentTypes={contentTypes}/>
        </div>
    );
}

export default HomePage;