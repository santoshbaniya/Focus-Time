import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import QuestionIcon from 'screens/opiner/components/QuestionIcon';
import {rs} from 'utils/ResponsiveScreen';

const styles = StyleSheet.create({
  flatlist: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  box: {
    flex: 1,
  },
  actionbutton: {
    height: rs(34),
    width: rs(34),
    marginRight: 14,
  },
  time: {
    marginBottom: 8,
    color: '#424242',
    fontSize: 12,
  },
  info: {
    fontSize: 16,
    color: 'white',
  },
});

const Item = ({icon, time, info}) => {
  return (
    <View style={styles.flatlist}>
      <QuestionIcon icon={icon} color="gray" style={styles.actionbutton} />
      <View style={styles.box}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.info}>{info}</Text>
      </View>
    </View>
  );
};
export default Item;
