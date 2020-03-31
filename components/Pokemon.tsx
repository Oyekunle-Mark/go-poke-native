import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ pokemon }) => (
  <View className="pokemon">
    <View className="pokemon__name">
      <Text>{pokemon.name}</Text>
    </View>
    <View className="pokemon__meta">
      <Text>{pokemon.maxHP}</Text>
      <Text>{pokemon.maxCP}</Text>
    </View>
    <View className="pokemon__image">
      <img src={pokemon.image} alt={pokemon.name} />
    </View>
    <View className="pokemon__attacks">
      {pokemon.attacks.special.slice(0, 3).map(attack => (
        <Text key={`${attack.name}-${attack.damage}`}>{attack.name}</Text>
      ))}
    </View>
  </View>
);
