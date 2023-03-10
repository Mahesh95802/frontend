import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';

import './Components.css';
import { GET_CONTENT_TYPE_SCHEMA, POST_COLLECTION, PUT_COLLECTION, DELETE_COLLECTION } from '../../common/endpoints';
import Modal from '../Modal';

const Collections = ({ collections, contentTypeId, title }) => {

	const [contentTypeSchema, setContentTypeSchema] = useState();
	const [showModal, setShowModal] = useState(false);
	const formRef = useRef();

	const refreshPage = () => {
		window.location.reload();
	};

	useEffect(() => {
		makeRequest(GET_CONTENT_TYPE_SCHEMA(contentTypeId))
			.then((res) => {
				console.log(res);
				setContentTypeSchema(res);
			}).catch((err) => {
				console.log(err);
			});
	}, [contentTypeId]);

	const createCollectionHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const collectionValues = [];
		for (const [key, value] of formData.entries()) {
			collectionValues.push({ contentSchemaId: key, value });
		}
		console.log('CollectionValues', collectionValues);
		makeRequest(POST_COLLECTION(collectionValues, contentTypeId))
			.then((res) => {
				console.log(res);
				setShowModal(false);
				refreshPage();
			}).catch((err) => {
				console.log(err);
			});
	};

	const editCollectionHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const collectionValues = [];
		for (const [key, value] of formData.entries()) {
			collectionValues.push({ contentSchemaId: key, value });
		}
		console.log('CollectionValues', collectionValues);
		console.log('showModal', showModal);
		console.log('CollectionId', showModal.split('-'));
		makeRequest(PUT_COLLECTION(collectionValues, showModal.split('-')[1]))
			.then((res) => {
				console.log(res);
				setShowModal(false);
				refreshPage();
			}).catch((err) => {
				console.log(err);
			});
	};

	const deleteCollectionHandler = (collectionId) => {
		makeRequest(DELETE_COLLECTION(collectionId))
			.then((res) => {
				console.log(res);
				refreshPage();
			}).catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="collections basic-padding" data-testid='collections'>
			<div className="collections-header">
				<h2>{collections.length} Entries Found</h2>
				<button type="click" onClick={() => setShowModal('CREATE')} >Add a new entry</button>
			</div>
			<div className="collections-body">
				<table>
					<thead>
						<tr>
							{contentTypeSchema && contentTypeSchema.map((field, index) => (
								index > 3 ? null : <th className="fields" key={field.id}>{field.fieldName}</th>
							))}
							<th className="collection-actions">Actions</th>
						</tr>
					</thead>
					<tbody>
						{collections && collections.map((collection) => (
							<tr className="collection" key={collection.id}>
								{contentTypeSchema && contentTypeSchema.map((field, index) => {
									// console.log("Collection", collection)
									if (index > 3) return null;
									const collectionMap = {};
									collection.CollectionValues.map((value) => ( collectionMap[value.ContentSchema.id] = value.value ));
									// console.log("CollectionMap", collectionMap);
									// console.log("FieldId", field.id)
									return (
										<td className="values" key={field.id}>{collectionMap[field.id]}</td>
									);
								})}
								<td className="collection-actions">
									<img src="/edit-2.png" alt="EDIT" loading="lazy" onClick={() => setShowModal(`UPDATE-${collection.id}`)}/>
									<img src="/delete-2.png" alt="DELETE" loading="lazy" onClick={() => deleteCollectionHandler(collection.id)}/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{ showModal && 
					<Modal>
						<form onSubmit={ showModal === 'CREATE' ? createCollectionHandler : editCollectionHandler } ref={formRef}>
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
								<button type="button" onClick={() => setShowModal(false)} id="create-collection-cancel-button">Cancel</button>
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