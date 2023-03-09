import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import MainPanel from "../../components/MainPanel";
import Sidebar from "../../components/Sidebar";
import { GET_COLLECTIONS } from "../../common/endpoints";
import makeRequest from "../../utils/makeRequest";

import "./CollectionPage.css";

const CollectionPage = () => {
    const { contentTypeId } = useParams();
    const [contentType, setContentType] = useState();
    const [collections, setCollections] = useState();

    useEffect(() => {
        makeRequest(GET_COLLECTIONS(contentTypeId))
            .then((res) => {
                console.log(res);
                setContentType(res.contentType);
                setCollections(res.collections);
            }).catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <div className="collections-page">
            <Sidebar selected={parseInt(contentTypeId)}/>
            {(contentType && collections) && <MainPanel title={contentType.name} collections={collections}/>}
        </div>
    );
}

export default CollectionPage;