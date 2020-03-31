import React from 'react';
import { View } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import PokemonsContainer from './containers/PokemonsContainer';

export default function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh',
  });

  return (
    <ApolloProvider client={client}>
      <View>
        <PokemonsContainer />
      </View>
    </ApolloProvider>
  );
}
