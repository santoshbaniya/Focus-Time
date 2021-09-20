import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {RoundedButton} from 'screens/Components/RoundedButton';
import {fontSize, paddingSize} from 'utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>What would you like to focus on?</Text>
      <View style={styles.mainContainer}>
        <TextInput
          onSubmitEditing={({nativeEvent}) => {
            setSubject(nativeEvent.text);
          }}
          style={styles.textInput}
        />
        <RoundedButton
          title="+"
          size={50}
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: paddingSize.xl,
  },
  textInput: {
    backgroundColor: '#fff',
    padding: paddingSize.md,
    color: '#000000',
    flex: 1,
    marginRight: 16,
  },
  mainContainer: {
    marginTop: paddingSize.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontSize: fontSize.lg,
  },
});
