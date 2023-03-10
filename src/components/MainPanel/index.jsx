import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

import './MainPanel.css';
import Collections from '../Collections';
import ContentTypes from '../ContentTypes';

const MainPanel = ({ title, collections, contentTypeId, contentTypes }) => {
    return (
        <div className="main-panel">
            <Header title={title} />
            {(collections && !contentTypes) && <Collections collections={collections} contentTypeId={contentTypeId} title={title}/> }
            {(contentTypes && !collections) && <ContentTypes contentTypes={contentTypes}/> }
        </div>
    )
}

MainPanel.propTypes = {
    title: PropTypes.string,
    collections: PropTypes.array,
    contentTypeId: PropTypes.number,
    contentTypes: PropTypes.array,
}

export default MainPanel