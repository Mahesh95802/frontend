import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { GET_CONTENT_TYPES } from "../../common/endpoints";
import makeRequest from "../../utils/makeRequest";

import "./Sidebar.css";

const Sidebar = ({ selected, contentTypes }) => {

    const navigate = useNavigate();

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
                            <div className="content-type" key={contentType.id} style={ selected === contentType.id ? { backgroundColor: "black", color: "white", fontWeight: "bolder" } : null }  onClick={() => navigate(`/content-type/${contentType.id}`)}>
                                <li className="basic-padding">{contentType.name}</li>
                            </div>
                        )
                    })
                }
            </div>
            <div style={ selected ? null : { backgroundColor: "black" } } className="content-type-builder">
                <h4 className="basic-padding" onClick={() => navigate('/home')} style={ selected ? null : { color: "white" } }>
                    CONTENT TYPE BUILDER
                </h4>
            </div>

        </div>
    )
}

Sidebar.propTypes = {
    selected: PropTypes.number,
    contentTypes: PropTypes.array
};

export default Sidebar;