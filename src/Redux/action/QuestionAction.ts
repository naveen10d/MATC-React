import axios from 'axios'

const baseUrl = 'http://localhost:4000'

export const getQuestions = (url: String) => async (dispatch: any) => {
    let apiUrl = `${baseUrl}${url}`
    try {
        await axios.get(apiUrl).then((response) => {
            dispatch({
                type: 'GET',
                payload: response.data
            })
        })
    }
    catch (error) {
        return error
    }
}