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
  pokemonMeta: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    flexWrap: 'wrap',
  },
  pokemonMetaText: {
    color: 'white',
    backgroundColor: '#7bb7b7',
    fontWeight: 'bold',
    margin: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  pokemonAttacks: {
    flex: 1,
    paddingHorizontal: 10,
  },
  pokemonAttacksText: {
    width: 30,
    backgroundColor: '#f16820',
    borderRadius: 3,
    padding: 7,
    fontWeight: 700,
    color: '#fff',
    paddingHorizontal: 10,
    fontSize: 12,
    marginBottom: 10,
    wordWrap: 'break-word',
    textAlign: 'center',
    lineHeight: 15,
  },
});
