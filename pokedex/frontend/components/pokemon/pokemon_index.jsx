import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';


class PokemonIndex extends React.Component {

  constructor(props) {
    super(props);
    this.requestAllPokemon = this.props.requestAllPokemon.bind(this);
  }

  componentDidMount() {
    this.requestAllPokemon();
  }

  render() {

    const pokeLabels = this.props.pokemon.map(pokemon => (
      <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>
    ));
    return (
    <div>
      <ul>
        {pokeLabels}
      </ul>
    </div>
  );
  }
}

export default PokemonIndex;
