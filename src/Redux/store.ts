import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { questionReducer } from './reducer/QuestionReducer'

export const store = createStore(questionReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch