import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {paddingSize} from 'utils/sizes';
import {Countdown} from 'screens/Components/Countdown';
import {RoundedButton} from 'screens/Components/RoundedButton';
import {Timing} from 'screens/features/Timer/timing';

const DEFAULT_TIME = 0.1;

export const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress: number) => {
    setProgress(progress);
  };

  const onEnd = () => {
    onTimerEnd();
    setIsStarted(false);
  };

  const changeTime = (min: number) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.title}>Focusing on :</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <ProgressBar progress={progress} color="#5E84E2" style={{height: 20}} />
      <View style={styles.buttonWrapper}>
        <Timing onchangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton title="-" size={50} onPress={() => clearSubject()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  timerContainer: {
    padding: paddingSize.lg,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },
  task: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  countDown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    flex: 0.3,
    padding: paddingSize.md,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  clearSubject: {},
});
