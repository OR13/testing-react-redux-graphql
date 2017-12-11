import { graphql, compose } from "react-apollo";

import { getPokemon } from "./query";

import { connect } from "react-redux";
import client from "../Apollo";

import {
  pokemonLoadStarted,
  pokemonLoaded,
  pokemonLoadFailed
} from "./actionCreators";

const mapStateToProps = state => {
  return {
    myPokedex: state.pokedex
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPokemonLoadStarted: () => {
      dispatch(pokemonLoadStarted());
    },
    onPokemonLoaded: pokemon => {
      dispatch(pokemonLoaded(pokemon));
    },
    onPokemonLoadFailed: () => {
      dispatch(pokemonLoadFailed());
    }
  };
};

export const gqlContainer = component => {
  return compose(
    graphql(getPokemon, {
      options: ({ name }) => ({
        variables: {
          name
        }
      })
    }),
    graphql(getPokemon, {
      props: ({ ownProps }) => ({
        loadPokemonWithApollo: async model => {
          ownProps.onPokemonLoadStarted();
          try {
            const result = await client.query({
              query: getPokemon,
              variables: model
            });
            ownProps.onPokemonLoaded(result.data.pokemon);
            return result.data.pokemon;
          } catch (e) {
            console.log(e);
            ownProps.onPokemonLoadFailed(e);
          }
        }
      })
    })
  )(component);
};

export const reduxContainer = component => {
  const hoc = gqlContainer(component);
  return connect(mapStateToProps, mapDispatchToProps)(hoc);
};
