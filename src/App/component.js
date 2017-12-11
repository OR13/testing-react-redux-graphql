import React from "react";

import MyComponent from "../MyComponent";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MyComponent name={"Bulbasaur"} />
      </div>
    );
  }
}
