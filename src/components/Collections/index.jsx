import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import makeRequest from "../../utils/makeRequest";

import "./Components.css";
import { GET_CONTENT_TYPE_SCHEMA, POST_COLLECTION, DELETE_COLLECTION } from "../../common/endpoints";
import Modal from "../Modal";

const Collections = ({ collections, contentTypeId, title }) => {

    const [contentTypeSchema, setContentTypeSchema] = useState();
    const [showCreateModal, setCreateShowModal] = useState(false);
    const formRef = useRef();

    const refreshPage = () => {
        window.location.reload();
    }

    useEffect(() => {
        makeRequest(GET_CONTENT_TYPE_SCHEMA(contentTypeId))
            .then((res) => {
                console.log(res);
                setContentTypeSchema(res);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    const createCollectionHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const collectionValues = [];
        for (const [key, value] of formData.entries()) {
            collectionValues.push({ contentSchemaId: key, value });
        }
        console.log("CollectionValues", collectionValues);
        makeRequest(POST_COLLECTION(collectionValues, contentTypeId))
            .then((res) => {
                console.log(res);
                setCreateShowModal(false);
                refreshPage();
            }).catch((err) => {
                console.log(err);
            });
    }

    const editCollectionHandler = () => {}

    const deleteCollectionHandler = (collectionId) => {
        makeRequest(DELETE_COLLECTION(collectionId))
            .then((res) => {
                console.log(res);
                refreshPage();
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="collections basic-padding">
            <div className="collections-header">
                <h2>{collections.length} Entries Found</h2>
                <button type="click" onClick={() => setCreateShowModal(true)} >Add a new Entry</button>
            </div>
            <div className="collections-body">
                <table>
                    <thead>
                        <tr>
                            {contentTypeSchema && contentTypeSchema.map((field) => (
                                <th className="fields" key={field.id}>{field.fieldName}</th>
                            ))}
                            <th className="collection-actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collections && collections.map((collection) => (
                            <tr className="collection" key={collection.id}>
                                {contentTypeSchema && contentTypeSchema.map((field) => {
                                    // console.log("Collection", collection)
                                    const collectionMap = {}
                                    collection.CollectionValues.map((value) => ( collectionMap[value.ContentSchema.id] = value.value ))
                                    // console.log("CollectionMap", collectionMap);
                                    // console.log("FieldId", field.id)
                                    return (
                                        <td className="values" key={field.id}>{collectionMap[field.id]}</td>
                                    )
                                })}
                                <td className="collection-actions">
                                    <img src="edit-1.png" alt="EDIT" loading="lazy" />
                                    <img src="delete-1.png" alt="DELETE" loading="lazy" onClick={() => deleteCollectionHandler(collection.id)}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                { showCreateModal && 
                    <Modal>
                        <form onSubmit={createCollectionHandler} ref={formRef}>
                            <div className="form-scroll">
                                <h2>{title}</h2>
                                {contentTypeSchema && contentTypeSchema.map((field) => (
                                    <div className="value-input" key={field.id}>
                                        <label htmlFor={field.fieldName}>{field.fieldName}</label>
                                        <input type="text" name={field.id} id={field.id} />
                                    </div>
                                ))}
                            </div>
                            <div className="form-footer">
                                <button type="button" onClick={() => setCreateShowModal(false)} id="create-collection-cancel-button">Cancel</button>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Modal>
                }
            </div>
        </div>
    );
};

Collections.propTypes = {
    collections: PropTypes.array,
    contentTypeId: PropTypes.number,
    title: PropTypes.string,
    // reloader: PropTypes.func
};

export default Collections;