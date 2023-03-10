import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainPanel from '../../components/MainPanel';
import Sidebar from '../../components/Sidebar';
import { GET_COLLECTIONS } from '../../common/endpoints';
import makeRequest from '../../utils/makeRequest';
import { GET_CONTENT_TYPES } from '../../common/endpoints';

import './CollectionPage.css';

const CollectionPage = () => {
	const { contentTypeId } = useParams();
	const [contentTypes, setContentTypes] = useState();
	const [collections, setCollections] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		makeRequest(GET_COLLECTIONS(contentTypeId))
			.then((res) => {
				console.log(res);
				setCollections(res);
			}).catch((err) => {
				console.log(err);
			});
		makeRequest(GET_CONTENT_TYPES)
			.then((res) => {
				console.log(res);
				setContentTypes(res);
			}).catch((err) => {
				console.log(err);
			});
	}, [navigate]);

	return (
		<div className="collections-page">
			<Sidebar selected={parseInt(contentTypeId)} contentTypes={contentTypes} navigate={navigate} />
			{(contentTypes && collections) && <MainPanel title={contentTypes.find((contentType) => contentType.id === parseInt(contentTypeId)).name} collections={collections} contentTypeId={parseInt(contentTypeId)}/>}
		</div>
	);
};

export default CollectionPage;