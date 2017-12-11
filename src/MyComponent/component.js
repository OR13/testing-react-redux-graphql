import React from "react";

export default class MyComponent extends React.Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h4> Pokemon from GraphQL</h4>

        <h5>pokemon from props</h5>
        <pre>
          {this.props.data &&
            this.props.data.pokemon &&
            this.props.data.pokemon.name}
        </pre>

        <h5>pokemon from redux</h5>
        <pre>
          {this.props.myPokedex &&
            this.props.myPokedex.selectedPokemon &&
            this.props.myPokedex.selectedPokemon.name}
        </pre>

        <button
          onClick={() => {
            this.props.loadPokemonWithApollo({ name: "Charmander" });
          }}
        >
          load pokemon
        </button>
      </div>
    );
  }
}
