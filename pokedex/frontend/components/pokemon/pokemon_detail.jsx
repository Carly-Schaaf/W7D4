import React from 'react';
import {fetchSinglePokemon} from '../../util/api_util';

class PokemonDetail extends React.Component {
  constructor(props) {

    super(props);
    this.state = this.props.pokemon;
    this.requestSinglePokemon = this.props.requestSinglePokemon.bind(this);
  }

  componentDidMount() {
    this.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.state != newProps.pokemon) {
  //     this.requestSinglePokemon(newProps.match.params.pokemonId);
  //   }
  // }

  render() {
    const pokeItems = this.props.items.map(item => (
      <ul>
        <li>{item.name}</li>
        <li><img src={item.image_url} height="100" width="100"></img></li>
      </ul>
    ));
    return (
    <div>
      <ul>
        {pokeItems}
        <li><img src={this.props.pokemon.image_url} height="100" width="100"></img></li>
      </ul>
    </div>
  );}

}

export default PokemonDetail;
