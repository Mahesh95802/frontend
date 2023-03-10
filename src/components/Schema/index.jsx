import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { DELETE_SCHEMA, GET_CONTENT_TYPE_SCHEMA, POST_CONTENT_TYPE_SCHEMA, PUT_CONTENT_TYPE_SCHEMA } from '../../common/endpoints';

import './Schema.css';
import Modal from '../Modal';

const Schema = ({ selectedContentType, editCallHandler }) => {

	const [schema, setSchema] = useState();
	const [showModal, setShowModal] = useState(false);
	const formRef = useRef();

	useEffect(() => {
		makeRequest(GET_CONTENT_TYPE_SCHEMA(selectedContentType.id))
			.then((res) => {
				console.log(res);
				setSchema(res);
			}).catch((err) => {
				console.log(err);
			});
	}, [selectedContentType]);

	const refreshPage = () => {
		window.location.reload();
	};

	const createSchemaHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		makeRequest(POST_CONTENT_TYPE_SCHEMA({ fieldName: formData.get('form-schema-name') }, selectedContentType.id))
			.then((res) => {
				console.log(res);
				setShowModal(false);
				refreshPage();
			}).catch((err) => {
				console.log(err);
				alert(err.response?.data?.error);
			});
	};

	const editSchemaHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		makeRequest(PUT_CONTENT_TYPE_SCHEMA({ fieldName: formData.get('form-schema-name') }, showModal.split('-')[1]))
			.then((res) => {
				console.log(res);
				setShowModal(false);
				refreshPage();
			}).catch((err) => {
				console.log(err);
				alert(err.message);
			});
	};

	const deleteSchemaHandler = (schemaId) => {
		makeRequest(DELETE_SCHEMA(schemaId))
			.then((res) => {
				console.log(res);
				refreshPage();
			}).catch((err) => {
				console.log(err);
			});
	};

	return (
		schema && <div className="schema basic-padding">
			<div className="schema-header">
				<div className="schema-name">
					{selectedContentType.name}
					<img src="pencil-1.png" alt="PENCIL" onClick={() => editCallHandler()}/>
				</div>
				<div className="schema-field-length">{selectedContentType.ContentSchemas.length} Fields</div>
			</div>
			<button className="add-schema-field" onClick={() => setShowModal('CREATE')}>
                Add another field
			</button>
			<div className="schema-list">
				<table className="schema-fields">
					<tbody>
						{schema && schema.map((field) => (
							<tr className="field" key={field.id}>
								<td className="field-icon">Ab</td>
								<td className="field-name">{field.fieldName}</td>
								<td className="field-type">{field.fieldType}</td>
								<td className="field-actions">
									<img src="/edit-2.png" alt="EDIT" loading="lazy" onClick={() => setShowModal(`UPDATE-${field.id}`)}/>
									<img src="/delete-2.png" alt="DELETE" loading="lazy" onClick={() => deleteSchemaHandler(field.id)}/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{showModal 
            && <Modal>
				<form onSubmit={ showModal === 'CREATE' ? createSchemaHandler : editSchemaHandler } ref={formRef}>
					<h3>{showModal === 'CREATE' ? 'Create new field' : 'Update field'}</h3>
					<label htmlFor="form-schema-name">Name of field</label><br />
					<input type="text" name="form-schema-name" id="form-schema-name" required />
					<div className="create-schema-form-actions">
						<button type="button" onClick={() => setShowModal(false)}>Cancel</button>
						<button type="submit" className="create-schema-button">Create</button>
					</div>
				</form>
            </Modal>}
		</div>
	);
};

Schema.propTypes = {
	// schema: PropTypes.array,
	selectedContentType: PropTypes.object,
	editCallHandler: PropTypes.func,
};

export default Schema;