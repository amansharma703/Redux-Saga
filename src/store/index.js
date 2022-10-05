import rootReducer from '../reducers'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import IndexSagas from "./sagas";


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(IndexSagas)

export default store;