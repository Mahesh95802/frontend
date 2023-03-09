import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ title }) => {
    return (
        <div className="main-panel-header basic-padding">
            {title}
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;
