import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

import './MainPanel.css';
import Collections from '../Collections';

const MainPanel = ({ title, collections, contentTypeId }) => {
    return (
        <div className="main-panel">
            <Header title={title}/>
            {collections ? <Collections collections={collections} contentTypeId={contentTypeId}/> : null }
        </div>
    )
}

MainPanel.propTypes = {
    title: PropTypes.string,
    collections: PropTypes.array,
    contentTypeId: PropTypes.number,
}

export default MainPanel