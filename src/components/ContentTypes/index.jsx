import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './ContentTypes.css';
import makeRequest from '../../utils/makeRequest';
import { POST_CONTENT_TYPE, PUT_CONTENT_TYPE } from '../../common/endpoints';
import Schema from '../Schema';
import Modal from '../Modal';

const ContentTypes = ({ contentTypes }) => {
    
	const [selectedContentType, setSelectedContentType] = React.useState();
	const [showModal, setShowModal] = React.useState(false);
	const formRef = React.useRef();

	useEffect(() => {
		if (contentTypes && contentTypes.length > 0) {
			setSelectedContentType(contentTypes[0]);
		}
	}, []);

	const refreshPage = () => {
		window.location.reload();
	};

	const createContentTypeHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		makeRequest(POST_CONTENT_TYPE({ name: formData.get('content-type-name') }))
			.then((res) => {
				console.log(res);
				setShowModal(false);
				refreshPage();
			}).catch((err) => {
				console.log(err);
			});
	};

	const editCallHandler = () => {
		setShowModal('UPDATE');
	};

	const editContentTypeHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		makeRequest(PUT_CONTENT_TYPE({ name: formData.get('content-type-name') }, selectedContentType.id))
			.then((res) => {
				console.log(res);
				setShowModal(false);
				refreshPage();
			}).catch((err) => {
				console.log(err);
			});
	};

	return (
		selectedContentType && <div className="content-types">
			<div className="content-type-list basic-padding">
				<div className="content-type-search">
					<p>{contentTypes.length} Types</p>
					<img src="/search-1.png" alt="SEARCH" />
				</div>
				<button className="create-content-type" onClick={() => setShowModal('CREATE')}>+ New Type</button>
				<div className="content-types-list">
					{contentTypes && contentTypes.map((contentType) => (
						<button className="content-type basic-padding" key={contentType.id} onClick={() => setSelectedContentType(contentType)} style={selectedContentType.id === contentType.id ? { color: 'white', backgroundColor: 'blueviolet', fontWeight: 'bolder' } : null }>
							<div>{contentType.name}</div>
							<div>{contentType.Collections.length}</div>
						</button>
					))}
				</div>
			</div>
			{selectedContentType && <Schema selectedContentType={selectedContentType} editCallHandler={editCallHandler}/>}
			{showModal && <Modal>
				<form onSubmit={ showModal === 'CREATE' ? createContentTypeHandler : editContentTypeHandler } ref={formRef}>
					<h3>{showModal === 'CREATE' ? 'Create new Content Type' : 'Update Content Type'}</h3>
					<label htmlFor="content-type-name">Name of content type</label><br />
					<input type="text" name="content-type-name" id="content-type-name" required />
					<div className="create-content-type-form-actions">
						<button type="button" onClick={() => setShowModal(false)}>Cancel</button>
						<button type="submit" className="create-content-type-button">Create</button>
					</div>
				</form>
			</Modal>}
		</div>
	);
};

ContentTypes.propTypes = {
	contentTypes: PropTypes.array,
};

export default ContentTypes;