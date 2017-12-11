import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import { addTypenameToDocument } from "apollo-client";
import configureStore from "redux-mock-store";
import { connect } from "react-redux";
import { graphql, compose } from "react-apollo";

import { getPokemon } from "../query";
import {
  pokemonLoadStarted,
  pokemonLoaded,
  pokemonLoadFailed
} from "../actionCreators";

import { store } from "../../Store";

import { getMockDataPath, variables } from "../../Apollo/mock.helpers";
let mockDataPath = getMockDataPath(__dirname, "getPokemon");

import MyComponent from "../component";
import { reduxContainer } from "../container";

import * as mockVars from "../__mock_vars__";

test("graphql loads pokemon from prop", done => {
  class TestComponent extends MyComponent {
    componentWillReceiveProps(props) {
      if (!props.data.loading && props.data.pokemon.name === mockVars.getPokemon.name) {
        done();
      }
    }
    render() {
      return <div />;
    }
  }
  const MyComponentWithGraphQL = reduxContainer(TestComponent);
  const mocks = [
    {
      request: {
        query: addTypenameToDocument(getPokemon),
        variables: variables
      },
      result: require(mockDataPath)
    }
  ];
  const wrapper = mount(
    <MockedProvider mocks={mocks} store={store}>
      <MyComponentWithGraphQL name={mockVars.getPokemon.name} />
    </MockedProvider>
  );
});

test("graphql loads pokemon when button is pressed and redux works", done => {
  class TestComponent extends MyComponent {
    componentWillReceiveProps(props) {
      if (props.myPokedex.status === "SUCCESS" && props.myPokedex.selectedPokemon.name === mockVars.getPokemon.name) {
        done();
      }
    }
    render() {
      return (
        <div>
          <button
            onClick={() => {
              this.props.loadPokemonWithApollo(mockVars.getPokemon);
            }}
          >
            load pokemon
          </button>
        </div>
      );
    }
  }
  const MyComponentWithGraphQL = reduxContainer(TestComponent);
  const mocks = [
    {
      request: {
        query: addTypenameToDocument(getPokemon),
        variables: variables
      },
      result: require(mockDataPath)
    }
  ];
  const wrapper = mount(
    <MockedProvider mocks={mocks} store={store}>
      <MyComponentWithGraphQL name={mockVars.getPokemon.name} />
    </MockedProvider>
  );
  wrapper.find("button").simulate("click");
});
