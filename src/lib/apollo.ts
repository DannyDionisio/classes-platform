import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4qwvvhj08tv01z5bwqiff81/master",
  cache: new InMemoryCache(),
});
