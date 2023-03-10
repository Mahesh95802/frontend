import React from 'react';
import PropTypes from 'prop-types';

import './Sidebar.css';

const Sidebar = ({ selected, contentTypes, navigate }) => {

	return (
		<div className="sidebar">
			<div className="sidebar-header">CMS+</div>
			<div className="collection-types">
				<div className="collection-types-header" >
					<h4 className="basic-padding">
                        COLLECTION TYPES
					</h4>
				</div>
				{
					contentTypes 
					&&  contentTypes.map((contentType) => {
						return (
							<div className="content-type" key={contentType.id} style={ selected === contentType.id ? { backgroundColor: 'black', color: 'white', fontWeight: 'bolder' } : null }  onClick={() => navigate(`/content-type/${contentType.id}`)}>
								<li className="basic-padding">{contentType.name}</li>
							</div>
							// <a className="content-type" href={`content-type/${contentType.id}`} key={contentType.id} style={ selected === contentType.id ? { backgroundColor: 'black', color: 'white', fontWeight: 'bolder' } : null } >
							// 	<li className="basic-padding">{contentType.name}</li>
							// </a>
						);
					})
				}
			</div>
			<div style={ selected ? null : { backgroundColor: 'black' } } className="content-type-builder">
				<h4 className="basic-padding" onClick={() => navigate('/home')} style={ selected ? null : { color: 'white' } }>
                    CONTENT TYPE BUILDER
				</h4>
			</div>

		</div>
	);
};

Sidebar.propTypes = {
	selected: PropTypes.number,
	contentTypes: PropTypes.array,
	navigate: PropTypes.func
};

export default Sidebar;