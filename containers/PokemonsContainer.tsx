import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import Spinner from 'react-spinner-material';

import Pokemon from '../components/Pokemon';
import { GET_POKEMONS } from '../graphql/get-pokemons';

export default () => {
  const { loading, data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 20 },
  });

  return (
    <View style={styles.container}>
      {loading ? (
        <div className="spinner">
          <Spinner radius={50} color={'#f16820'} stroke={2} visible={true} />
        </div>
      ) : (
        pokemons.map(pokemon => <Pokemon key={pokemon.key} pokemon={pokemon} />)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 'auto',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});
