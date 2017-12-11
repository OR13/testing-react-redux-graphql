import * as Constants from "./constants";


const handlers = {
  [Constants.POKEMON_LOAD_STARTED]: (state, action) => {
    return {
      ...state,
      status: 'PENDING'
    };
  },
  [Constants.POKEMON_LOADED]: (state, action) => {
    return {
      ...state,
      status: 'SUCCESS',
      selectedPokemon: action.payload
    };
  },
  [Constants.POKEMON_LOAD_FAILED]: (state, action) => {
    return {
      ...state,
      status: 'FAILED'
    };
  },
};

export default (state, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return {
    ...state
  };
};
