const initialState = { questions: [] }

export const questionReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET':
            return {
                ...state,
                questions: payload
            }
        default:
            return {
                ...state
            }
    }
}