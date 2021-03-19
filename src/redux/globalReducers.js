/**
 * import reducer for page
 */
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import pokemonReducer from './pokemonReducer/reducer'

/**
 * combine all reducer
 */
 const createRootReducer = combineReducers({
    pokemonReducer: pokemonReducer
})

export default createRootReducer
