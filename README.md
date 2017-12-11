
# Testing React Redux & GraphQL

```
yarn install
yarn mock:clean 
yarn mock:gen 
yarn test
yarn start
```

`yarn mock:clean` deletes mock data used by graphql tests.

`yarn mock:gen` generates data to be used by graphql tests and saves the data to a file. 

This makes it possible to test without making real network requests.

`yarn test` and select `a` to run all tests. These tests verify the component, and the graphql container using the generated mock data.

`yarn start` run the app in devlopment mode.


## Motivation

It is desirable to test react components, redux containers and graphql functionality in isolation and integration.

This create-react-app derived app shows how components, redux and graphql containers can all be tested.

It also shows how mock data can be retrieved via real network requests and then used in subsequent tests. This enables developers to adjust to data changes easily.