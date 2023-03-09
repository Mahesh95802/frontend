import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import makeRequest from "../../utils/makeRequest";

import "./Components.css";
import { GET_CONTENT_TYPE_SCHEMA } from "../../common/endpoints";

const Collections = ({ collections, contentTypeId }) => {

    const [contentTypeSchema, setContentTypeSchema] = useState();

    // console.log("Collections", collections)

    useEffect(() => {
        makeRequest(GET_CONTENT_TYPE_SCHEMA(contentTypeId))
            .then((res) => {
                console.log(res);
                setContentTypeSchema(res);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    const createCollectionHandler = () => {}

    return (
        <div className="collections basic-padding">
            <div className="collections-header">
                <h2>{collections.length} Entries Found</h2>
                <button type="click" onClick={createCollectionHandler} >Add a new Entry</button>
            </div>
            <div className="collections-body">
                {/* <div className="collection-schema">
                    {contentTypeSchema && contentTypeSchema.map((field) => (
                        <div className="fields" key={field.id}>{field.fieldName}</div>
                    ))}
                    <div className="collection-actions">Actions</div>
                </div>
                <div className="collection-values">
                    {collections.map((collection) => (
                        <div className="collection" key={collection.id}>
                            {JSON.stringify(collection)}
                        </div>
                    ))}
                </div> */}
                <table>
                    <thead>
                        {contentTypeSchema && contentTypeSchema.map((field) => (
                            <th className="fields" key={field.id}>{field.fieldName}</th>
                        ))}
                        <th className="collection-actions">Actions</th>
                    </thead>
                    <tbody>
                        {collections && collections.map((collection) => (
                            <tr className="collection" key={collection.id}>
                                {contentTypeSchema && contentTypeSchema.map((field) => {
                                    // console.log("Collection", collection)
                                    const collectionMap = {}
                                    collection.CollectionValues.map((value) => ( collectionMap[value.id] = value.value ))
                                    // console.log("CollectionMap", collectionMap);
                                    // console.log("FieldId", field.id)
                                    return (
                                        <td className="values" key={field.id}>{collectionMap[field.id]}</td>
                                    )
                                })}
                                <td className="collection-actions">
                                    <img src="edit-1.png" alt="EDIT"/>
                                    <img src="delete-1.png" alt="DELETE"/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Collections.propTypes = {
    collections: PropTypes.array,
    contentTypeId: PropTypes.number,
};

export default Collections;