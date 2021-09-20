import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from 'utils/Color';
import {rs} from 'utils/ResponsiveScreen';

type ButtonColor = 'red' | 'blue' | 'gray';

const getButtonColor = (color: ButtonColor) => {
  switch (color) {
    case 'gray':
      return Color.Gray;
    case 'red':
      return Color.Red;
    default:
      return Color.Blue;
  }
};

const styles = StyleSheet.create({
  container: {
    width: rs(72),
    height: rs(72),
    backgroundColor: Color.LightGray,
    borderRadius: rs(36),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
  alertIcon: {
    color: '#fff',
  },
});

interface Props {
  icon: string;
  disabled?: boolean;
  dimmed?: boolean;
  color: ButtonColor;
}

const App = ({icon, color}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <View
        style={[styles.container, {backgroundColor: getButtonColor(color)}]}>
        <Icon name={icon} style={styles.alertIcon} size={28} />
      </View>
    </TouchableOpacity>
  );
};

export default App;
