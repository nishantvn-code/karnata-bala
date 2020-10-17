import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './store/index'

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
   const sagaMiddleware = createSagaMiddleware();
   return {
       ...createStore(
           rootReducer,
           applyMiddleware(sagaMiddleware)),
           runSaga: sagaMiddleware.run(rootSaga)
   } 
}
export default configureStore;