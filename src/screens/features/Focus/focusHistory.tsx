import React from 'react';
import {StyleSheet, SafeAreaView, FlatList, Text, View} from 'react-native';
import {fontSize, paddingSize} from 'utils/sizes';
import {RoundedButton} from 'screens/Components/RoundedButton';

const HistoryItem = ({item}) => {
  console.log(item);
  return (
    <>
      <Text style={styles.history}>{item.SUBJECT}</Text>
    </>
  ); //objects are not valid as a React child
};

export const FocusHistory = ({focusHistory, onClear}) => {
  const clearHistroy = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>We have to focus on</Text>
            <FlatList
              style={{flex: 1}}
              data={focusHistory}
              contentContainerStyle={{flex: 1, alignItems: 'center'}}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={80}
                title="Clear"
                onPress={() => clearHistroy()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: fontSize.lg,
  },
  history: {
    color: 'red',
    fontSize: fontSize.lg,
    fontWeight: 'bold',
  },
  clearContainer: {
    alignItems: 'center',
    padding: paddingSize.lg,
  },
});
