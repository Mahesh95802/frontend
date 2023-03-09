import React, { useEffect } from 'react';

import './HomePage.css';

import Sidebar from '../../components/Sidebar';
import makeRequest from '../../utils/makeRequest';
import { GET_CONTENT_TYPES } from '../../common/endpoints';
import MainPanel from '../../components/MainPanel';

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
            <Sidebar selected={"CONTENT TYPE BUILDER"} contentTypes={contentTypes}/>
            <MainPanel title="Content Type Builder"/>
        </div>
    );
}

export default HomePage;