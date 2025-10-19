import axios from 'axios'
const commonAPI = async (httpMethod, url, reqBody) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody,
    };
    try {
        const resp = await axios(reqConfig)
        return resp.data
    }
    catch (error) {
        console.error("api error", error)
        throw error;
    }
}
export default commonAPI