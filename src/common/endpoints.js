export const AUTH_SERVICE_URL = "http://localhost:4001"
export const BACKEND_URL = "http://localhost:4000"

// export const AUTH_SERVICE_URL = "http://auth-server:4001"
// export const BACKEND_URL = "http://backend-server:4000"

export const LOGIN_ROUTE = (data) => ({
    url: `${AUTH_SERVICE_URL}/auth/login`,
    method: "POST",
    data: data,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const REGISTER_ROUTE = (data) => ({
    url: `${AUTH_SERVICE_URL}/auth/register`,
    method: "POST",
    data: data,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const VERIFY_TOKEN_ROUTE = (token) => ({
    url: `${AUTH_SERVICE_URL}/auth/verify`,
    method: "GET",
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const GET_USER_ROUTE = (token) => ({
    url: `${BACKEND_URL}/`,
    method: "GET",
    headers: {
        Authorization: `Bearer ${token}`
    }
})