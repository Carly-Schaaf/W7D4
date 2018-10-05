import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
// import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import {requestSinglePokemon} from './actions/pokemon_actions';
import {fetchSinglePokemon, fetchAllPokemon} from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.selectAllPokemon = selectAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.requestSinglePokemon = requestSinglePokemon;
  // window.fetchSinglePokemon = fetchSinglePokemon;
  // window.fetchAllPokemon = fetchAllPokemon;

  ReactDOM.render(<Root store={store}/>, rootEl);
});
