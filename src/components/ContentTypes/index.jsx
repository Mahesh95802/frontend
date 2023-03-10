import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./ContentTypes.css";
import makeRequest from "../../utils/makeRequest";
import { GET_CONTENT_TYPE_SCHEMA } from "../../common/endpoints";
import Schema from "../Schema";

const ContentTypes = ({ contentTypes }) => {
    
    const [selectedContentType, setSelectedContentType] = React.useState();
    const [schema, setSchema] = React.useState();

    useEffect(() => {
        if (contentTypes && contentTypes.length > 0) {
            setSelectedContentType(contentTypes[0]);
            makeRequest(GET_CONTENT_TYPE_SCHEMA(contentTypes[0].id))
                .then((res) => {
                    console.log(res);
                    setSchema(res);
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <div className="content-types">
            <div className="content-type-list basic-padding">
                <div className="content-type-search">
                    <p>{contentTypes.length} Types</p>
                    <img src="/search-1.png" alt="SEARCH" />
                </div>
                <button className="create-content-type">+ New Type</button>
                <div className="content-types-list">
                    {contentTypes && contentTypes.map((contentType) => (
                        <button className="content-type" key={contentType.id} onClick={() => setSelectedContentType(contentType)} style={selectedContentType.id === contentType.id ? { color: "white", backgroundColor: "blueviolet", fontWeight: "bolder" } : null }>
                            <div>{contentType.name}</div>
                            {/* <p>{contentType.Collections.length}</p> */}
                        </button>
                    ))}
                </div>
            </div>
            {schema && <Schema schema={schema} selectedContentType={selectedContentType}/>}
        </div>
    )
}

ContentTypes.propTypes = {
    contentTypes: PropTypes.array,
}

export default ContentTypes