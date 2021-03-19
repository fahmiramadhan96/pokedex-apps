import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import PropTypes from 'prop-types'
/**
 * Import Reducer Section
*/
import { fetchPokemonList } from '../../redux/pokemonReducer/action'


const details = (props) => {
  console.log(props);
  return (
    <div>POPOo</div>
  )
}

details.propTypes = {
    pokemonList: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
})

const mapDispatchToProps = (dispatch) => ({
    pokemonList: () => {
        dispatch(fetchPokemonList())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(details)
