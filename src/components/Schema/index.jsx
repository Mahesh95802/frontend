import React from "react";
import PropTypes from "prop-types";

import "./Schema.css";

const Schema = ({ schema, selectedContentType  }) => {
    return (
        <div className="schema basic-padding">
            <div className="schema-header">
                <div className="schema-name">{selectedContentType.name}</div>
                <div className="schema-id">{selectedContentType.ContentSchemas.length}</div>
            </div>
            <div className="schema-fields">
                {schema && schema.map((field) => (
                    <div className="field" key={field.id}>
                        <div className="field-name">{field.fieldName}</div>
                        <div className="field-type">{field.fieldType}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

Schema.propTypes = {
    schema: PropTypes.array,
    selectedContentType: PropTypes.object,
}

export default Schema