import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useHistory } from "react-router-dom";


import PropTypes from 'prop-types'
/**
 * Import Reducer Section
*/
import { fetchPokemonList } from '../../redux/pokemonReducer/action'


const homepage = (props) => {
  let history = useHistory();


  return (
      <button onClick={() => props.pokemonList()}>PEPET TERUSS</button>
  )
}

homepage.propTypes = {
    pokemonList: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
})

const mapDispatchToProps = (dispatch) => ({
    pokemonList: () => {
        dispatch(fetchPokemonList())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(homepage)
