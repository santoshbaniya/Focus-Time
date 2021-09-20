import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import AlertIcons from 'screens/opiner/UpdatedComponents/AlertIcons';
import Button from 'screens/opiner/components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  firstView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionbutton: {
    alignSelf: 'center',
  },
  info: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 16,
  },
  emailbutton: {
    marginBottom: 20,
    width: '100%',
  },
});

const NewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <AlertIcons icon="smile" color="gray" />
        <Text style={styles.info}>You’ll receive £15 for your response.</Text>
      </View>
      <View>
        <Button
          icon="right"
          color="blue"
          title="Continue"
          style={styles.emailbutton}
        />
        <Button
          icon="left"
          color="gray"
          title="Back"
          style={styles.emailbutton}
        />
      </View>
    </View>
  );
};

export default NewScreen;
