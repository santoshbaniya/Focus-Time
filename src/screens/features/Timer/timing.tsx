import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RoundedButton} from 'screens/Components/RoundedButton';

export const Timing = ({onchangeTime}) => {
  return (
    <>
      <View style={styles.container}>
        <RoundedButton size={75} title="1" onPress={() => onchangeTime(0.1)} />
      </View>
      <View style={styles.container}>
        <RoundedButton size={75} title="2" onPress={() => onchangeTime(2)} />
      </View>
      <View style={styles.container}>
        <RoundedButton size={75} title="5" onPress={() => onchangeTime(5)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
