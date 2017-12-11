import { ApolloClient, createNetworkInterface } from "react-apollo";

const networkInterface = createNetworkInterface({
  uri: 'https://graphql-pokemon.now.sh/'
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = new Headers();
      }
      // req.options.headers.Authorization = `Bearer ${token}`;
      next();
    }
  }
]);

networkInterface.useAfter([
  {
    applyAfterware({ response }, next) {
      if (response.status === 401) {
        console.log(response);
      }
      next();
    }
  }
]);

export const client = new ApolloClient({ networkInterface });
