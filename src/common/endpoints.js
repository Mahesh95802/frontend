export const AUTH_SERVICE_URL = 'http://localhost:4001';
export const BACKEND_URL = 'http://localhost:4000';

// export const AUTH_SERVICE_URL = "http://auth-server:4001"
// export const BACKEND_URL = "http://backend-server:4000"

export const LOGIN_ROUTE = (data) => ({
	url: `${AUTH_SERVICE_URL}/auth/login`,
	method: 'POST',
	data: data,
	headers: {
		'Content-Type': 'application/json'
	}
});

export const REGISTER_ROUTE = (data) => ({
	url: `${AUTH_SERVICE_URL}/auth/register`,
	method: 'POST',
	data: data,
	headers: {
		'Content-Type': 'application/json'
	}
});

export const VERIFY_TOKEN_ROUTE = (token) => ({
	url: `${AUTH_SERVICE_URL}/auth/verify`,
	method: 'GET',
	headers: {
		Authorization: `Bearer ${token}`
	}
});

export const GET_CONTENT_TYPES = {
	url: `${BACKEND_URL}/content-types`,
	method: 'GET',
	headers: {
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`
	}
};

export const GET_COLLECTIONS = (contentTypeId) => ({
	url: `${BACKEND_URL}/collections/content-types/${contentTypeId}`,
	method: 'GET',
	headers: {
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`
	}
});

export const GET_CONTENT_TYPE_SCHEMA = (contentTypeId) => ({
	url: `${BACKEND_URL}/schema/content-types/${contentTypeId}`,
	method: 'GET',
	headers: {
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`
	}
});

export const POST_CONTENT_TYPE = (data) => ({
	url: `${BACKEND_URL}/content-types`,
	method: 'POST',
	data: data,
	headers: {
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
		'Content-Type': 'application/json'
	}
});

export const POST_CONTENT_TYPE_SCHEMA = (data, contentTypeId) => ({
    url: `${BACKEND_URL}/schema/content-types/${contentTypeId}`,
    method: 'POST',
    data: data,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json'
    }
});

export const POST_COLLECTION = (data, contentTypeId) => ({
	url: `${BACKEND_URL}/collections/content-types/${contentTypeId}`,
	method: 'POST',
	data: data,
	headers: {
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
		'Content-Type': 'application/json'
	}
});

export const PUT_CONTENT_TYPE = (data, contentTypeId) => ({
	url: `${BACKEND_URL}/content-types/${contentTypeId}`,
	method: 'PUT',
	data: data,
	headers: {
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
		'Content-Type': 'application/json'
	}
});

export const PUT_CONTENT_TYPE_SCHEMA = (data, schemaId) => ({
    url: `${BACKEND_URL}/schema/${schemaId}`,
    method: 'PUT',
    data: data,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json'
    }
});

export const PUT_COLLECTION = (data, collectionId) => ({
	url: `${BACKEND_URL}/collections/${collectionId}`,
	method: 'PUT',
	data: data,
	headers: {
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
		'Content-Type': 'application/json'
	}
});

export const DELETE_SCHEMA = (schemaId) => ({
    url: `${BACKEND_URL}/schema/${schemaId}`,
    method: 'DELETE',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
});

export const DELETE_COLLECTION = (collectionId) => ({
	url: `${BACKEND_URL}/collections/${collectionId}`,
	method: 'DELETE',
	headers: {
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`
	}
});

