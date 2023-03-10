import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { GET_CONTENT_TYPE_SCHEMA } from '../../common/endpoints';

import './Schema.css';

const Schema = ({ selectedContentType, editCallHandler }) => {

	const [schema, setSchema] = useState();

	useEffect(() => {
		makeRequest(GET_CONTENT_TYPE_SCHEMA(selectedContentType.id))
			.then((res) => {
				console.log(res);
				setSchema(res);
			}).catch((err) => {
				console.log(err);
			});
	}, [selectedContentType]);

	return (
		schema && <div className="schema basic-padding">
			<div className="schema-header">
				<div className="schema-name">
					{selectedContentType.name}
					<img src="pencil-1.png" alt="PENCIL" onClick={() => editCallHandler()}/>
				</div>
				<div className="schema-field-length">{selectedContentType.ContentSchemas.length} Fields</div>
			</div>
			<button className="add-schema-field">
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
									<img src="/edit-2.png" alt="EDIT" loading="lazy" />
									<img src="/delete-2.png" alt="DELETE" loading="lazy" />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

Schema.propTypes = {
	// schema: PropTypes.array,
	selectedContentType: PropTypes.object,
	editCallHandler: PropTypes.func,
};

export default Schema;