import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {wp} from 'utils/Constant';
import Color from 'utils/Color';

type ButtonColor = 'red' | 'blue' | 'gray' | 'DimmedGray';

const getButtonColor = (color: ButtonColor) => {
  switch (color) {
    case 'red':
      return Color.Red;
    case 'gray':
      return Color.Gray;
    case 'DimmedGray':
      return Color.DimmedGray;
    default:
      return Color.Blue;
  }
};

type IconOptions =
  | 'fast-backward'
  | 'fast-forward'
  | 'play'
  | 'arrows-alt'
  | 'expand'
  | 'exclamation'
  | 'hockey-puck'
  | 'thumbs-up'
  | 'file'
  | 'user-check'
  | 'comment'
  | 'smile'
  | 'pause-circle'
  | 'square'
  | 'camera';

const getIcon = (icon: IconOptions) => {
  switch (icon) {
    case 'fast-backward':
      return 'fast-backward';
    case 'fast-forward':
      return 'fast-forward';
    case 'play':
      return 'play';
    case 'arrows-alt':
      return 'arrows-alt';
    case 'expand':
      return 'expand';
    case 'exclamation':
      return 'exclamation';
    case 'thumbs-up':
      return 'thumbs-up';
    case 'file':
      return 'file';
    case 'user-check':
      return 'user-check';
    case 'hockey-puck':
      return 'hockey-puck';
    case 'comment':
      return 'comment';
    case 'smile':
      return 'smile';
    case 'pause-circle':
      return 'pause-circle';
    case 'square':
      return 'square';
    case 'camera':
      return 'camera';
    default:
      return 'check-circle';
  }
};

const styles = StyleSheet.create({
  container: {
    width: wp(18),
    height: wp(18),
    backgroundColor: Color.LightGray,
    borderRadius: wp(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
});

interface Props {
  style?: object;
  icon: IconOptions;
  disabled?: boolean;
  dimmed?: boolean;
  color: ButtonColor;
  size: number;
}

const App = ({
  style,
  icon,
  disabled = false,
  dimmed = false,
  color,
  size,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      {Boolean(disabled === false) && (
        <View
          style={[
            styles.container,
            {backgroundColor: getButtonColor(color)},
            style,
          ]}>
          <Icon
            name={getIcon(icon)}
            style={{color: dimmed ? Color.Gray : Color.White}}
            size={size}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default App;
