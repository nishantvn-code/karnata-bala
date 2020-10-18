import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/rootReducer';
import rootSaga from './store/index'

const logger = createLogger({
  collapsed: true,
});

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const getMiddleware = () => {
      return applyMiddleware(sagaMiddleware, logger);
  };

  const store = createStore(
    reducer,
    initialState,
    getMiddleware(),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}