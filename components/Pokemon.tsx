import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default ({ pokemon }) => (
  <View style={styles.pokemon}>
    <View style={styles.pokemonName}>
      <Text style={styles.pokemonNameText}>{pokemon.name}</Text>
    </View>

    <View style={styles.pokemonMeta}>
      <Text style={styles.pokemonMetaText}>{pokemon.maxHP}</Text>
      <Text style={styles.pokemonMetaText}>{pokemon.maxCP}</Text>
    </View>

    <Image source={{ uri: pokemon.image }} style={styles.pokemonImage} />

    <View style={styles.pokemonAttacks}>
      {pokemon.attacks.special.slice(0, 3).map(attack => (
        <Text
          key={`${attack.name}-${attack.damage}`}
          style={styles.pokemonAttacksText}
        >
          {attack.name}
        </Text>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  pokemon: {
    width: '90%',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    overflow: 'hidden',
    marginVertical: 10,
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
    // maxWidth: 100,
    height: 'auto',
    // width: 200,
    // height: 200,
    marginVertical: 5,
  },
  pokemonMeta: {
    flex: 1,
    marginVertical: 10,
    alignItems: 'center',
    height: 50,
  },
  pokemonMetaText: {
    color: 'white',
    backgroundColor: '#7bb7b7',
    fontWeight: 'bold',
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '50%',
    textAlign: 'center',
  },
  pokemonAttacks: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  pokemonAttacksText: {
    // width: '30%',
    backgroundColor: '#f16820',
    borderRadius: 3,
    padding: 7,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 10,
    fontSize: 12,
    marginRight: 10,
    // wordWrap: 'break-word',
    textAlign: 'center',
    // lineHeight: 15,
  },
});
