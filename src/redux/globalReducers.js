/**
 * import reducer for page
 */
import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer/reducer'

/**
 * combine all reducer
 */
export default combineReducers({
    pokemonReducer,
})