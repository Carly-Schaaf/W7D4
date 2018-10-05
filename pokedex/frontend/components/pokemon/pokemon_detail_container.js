import {connect} from 'react-redux';
import {requestSinglePokemon} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import {selectAllItems} from '../../reducers/selectors';

const mapStateToProps = state => {
  // piece of state that container subscribes
  return ({
    pokemon: state.entities.pokemon,
    items: selectAllItems(state)
  });
};

const mapDispatchToProps = (dispatch) => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
