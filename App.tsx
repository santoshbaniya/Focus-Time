import React, {useState} from 'react';
import {View, StyleSheet, Platform, AsyncStorage} from 'react-native';
import {Focus} from 'screens/features/Focus';
import {Timer} from 'screens/features/Timer';
import {paddingSize} from 'utils/sizes';
import {FocusHistory} from 'screens/features/Focus/focusHistory';

const INDEX = {
  complete: 'complete',
  cancelled: 'cancelled',
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]); //storing the user input as focusHistory as creating state as an empty array;

  const addFocusHistorySubjectWithState = (SUBJECT: string, INDEX: string) => {
    setFocusHistory([...focusHistory, {SUBJECT, INDEX}]);
  };
  const onClear = () => {
    setFocusHistory([]);
  };
  console.log(focusHistory);
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
