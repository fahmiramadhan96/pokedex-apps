/**
 * create global store
 */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
/**
 * import saga global and reducer global
 */
import globalReducers from './globalReducers'
import globalSagas from './globalSagas'

const sagaMiddleware = createSagaMiddleware()
sagaMiddleware.run(globalSagas)
const store = createStore(
  globalReducers,
  applyMiddleware(sagaMiddleware)
)

export default store