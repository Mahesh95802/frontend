import axios from 'axios'
import HTTPError from '../../common/HTTPError'

const makeRequest = async (request, navigate) => {
    try{
        const response = await axios(request)
        // console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        if (navigate && error.response.status === 401) navigate('/login')
        throw new HTTPError(error.response.status, error.response.data.message)
        // return error
    }
}

export default makeRequest
