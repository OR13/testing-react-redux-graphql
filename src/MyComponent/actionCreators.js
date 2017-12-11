import * as Constants from "./constants";

export const pokemonLoadStarted = () => {
  return {
    type: Constants.POKEMON_LOAD_STARTED
  };
};

export const pokemonLoaded = pokemon => {
  return {
    type: Constants.POKEMON_LOADED,
    payload: pokemon
  };
};

export const pokemonLoadFailed = error => {
  return {
    type: Constants.POKEMON_LOAD_FAILED,
    payload: {
      error
    }
  };
};
