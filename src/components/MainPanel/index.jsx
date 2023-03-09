import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

import './MainPanel.css';

const MainPanel = ({ title }) => {
    return (
        <div className="main-panel">
            <Header title={title}/>
        </div>
    )
}

MainPanel.propTypes = {
    title: PropTypes.string
}

export default MainPanel