import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fontSize, paddingSize} from 'utils/sizes';

const minutesTomillis = (min: number) => min * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export const Countdown = ({minutes = 20, isPaused, onProgress, onEnd}) => {
  const interval = React.useRef(0);
  const [milllis, setmillis] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const countDown = () => {
    setmillis(time => {
      if (time === 0) {
        onEnd();

        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      //report the progress
      return timeLeft;
    });
  };

  useEffect(() => {
    setmillis(minutesTomillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(milllis / minutesTomillis(minutes));
  }, [milllis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(milllis / 1000 / 60) % 60;
  const seconds = Math.floor(milllis / 1000) % 60;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: fontSize.xxxl,
    fontWeight: 'bold',
    padding: paddingSize.md,
    color: '#fff',
    backgroundColor: 'rgba(94, 132,226, 0.3)',
  },
});
