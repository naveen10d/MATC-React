import axios from 'axios'

const baseUrl = 'http://localhost:4000'

export const getQuestions = () => async (dispatch: any) => {
    try {
        await axios.get(`${baseUrl}/question`).then((response) =>
            dispatch({
                type: 'GET',
                payload: response.data
            })
        )
    }
    catch (error) {
        return error
    }
}