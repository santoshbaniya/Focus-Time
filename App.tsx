import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Focus} from 'screens/features/Focus';
import {Timer} from 'screens/features/Timer';
import {paddingSize} from 'utils/sizes';
import {FocusHistory} from 'screens/features/Focus/focusHistory';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INDEX = {
  complete: 'complete',
  cancelled: 'cancelled',
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]); //storing the user input as focusHistory as creating state as an empty array;

  const addFocusHistorySubjectWithState = (SUBJECT: string, INDEX: string) => {
    setFocusHistory([
      ...focusHistory,
      {key: String(focusHistory.length + 1), SUBJECT, INDEX},
    ]);
  };
  const onClear = () => {
    setFocusHistory([]);
  };
  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory)); //JSON.stringify allows us to save focusHistory
    } catch (e) {
      console.log(e);
    }
  };
  console.log(saveFocusHistory);

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('focusHistory');
      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(loadFocusHistory);
  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistorySubjectWithState(focusSubject, INDEX.complete);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusHistorySubjectWithState(focusSubject, INDEX.cancelled);
            setFocusSubject(null);
          }}
        />
      ) : (
        //wrapping with fragment, allows us to render multiple pieces without having to use a view
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'ios' ? paddingSize.md : paddingSize.lg,
    backgroundColor: '#252250',
  },
});
