import React from "react";
import PropTypes from "prop-types";

import "./Sidebar.css";

const Sidebar = ({ selected, contentTypes }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">CMS+</div>
            <div className="collection-types">
                <div className="collection-types-header" style={ selected == "COLLECTION TYPES" ? { backgroundColor: "black", color: "white" } : null }>
                    <h4 className="basic-padding">
                        COLLECTION TYPES
                    </h4>
                </div>
                {
                    contentTypes 
                    &&  contentTypes.map((contentType) => {
                        return (
                            <div className="content-type" key={contentType.id} style={{ backgroundColor: "black", color: "white" }}>
                                <li className="basic-padding">{contentType.name}</li>
                            </div>
                        )
                    })
                }
            </div>
            <div style={ selected == "CONTENT TYPE BUILDER" ? { backgroundColor: "black", color: "white" } : null } className="content-type-builder">
                <h4 className="basic-padding">
                    CONTENT TYPE BUILDER
                </h4>
            </div>

        </div>
    )
}

Sidebar.propTypes = {
    selected: PropTypes.string,
    contentTypes: PropTypes.array
};

export default Sidebar;