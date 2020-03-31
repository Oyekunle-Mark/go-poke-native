import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ pokemon }) => (
  <View style={styles.pokemon}>
    <View className="pokemon__name">
      <Text>{pokemon.name}</Text>
    </View>
    <View className="pokemon__meta">
      <Text>{pokemon.maxHP}</Text>
      <Text>{pokemon.maxCP}</Text>
    </View>

    <img src={pokemon.image} alt={pokemon.name} />

    <View className="pokemon__attacks">
      {pokemon.attacks.special.slice(0, 3).map(attack => (
        <Text key={`${attack.name}-${attack.damage}`}>{attack.name}</Text>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  pokemon: {
    width: 110,
    backgroundColor: '#fff',
    backgroundClip: 'border-box',
    borderWeight: 1,
    border$adius: 3,
    overflow: 'hidden',
    marginBottom: 20,
  },
  pokemonName: {
    backgroundColor: '#ecd018',
    textAlign: 'center',
    padding: 10,
  },
  pokemonNameText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 4,
  },
  pokemonImage: {
    padding: 20,
    minHeight: 300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 100,
    height: 'auto',
  },
});
