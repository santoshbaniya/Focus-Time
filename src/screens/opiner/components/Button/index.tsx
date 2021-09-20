import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {wp} from 'utils/Constant';
import Color from 'utils/Color';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: wp(14),
    backgroundColor: '#1e90ff',
    borderRadius: 26,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginVertical: 14,
  },
  iconView: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    marginRight: 40,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export type ButtonColor = 'red' | 'blue' | 'green' | 'gray' | 'black';

const getButtonColor = (color: ButtonColor) => {
  switch (color) {
    case 'red':
      return Color.Red;
    case 'green':
      return Color.Green;
    case 'gray':
      return Color.Gray;
    case 'black':
      return Color.Black;
    default:
      return Color.Blue;
  }
};

export type IconOptions =
  | 'check'
  | 'times'
  | 'left'
  | 'right'
  | 'camera'
  | 'envelope'
  | 'eye'
  | 'file-upload'
  | 'external-link-alt'
  | 'link'
  | 'save'
  | 'trash'
  | 'play'
  | 'hand-paper';

const getIcon = (icon: IconOptions) => {
  switch (icon) {
    case 'check':
      return 'check-circle';
    case 'times':
      return 'times';
    case 'left':
      return 'arrow-left';
    case 'right':
      return 'arrow-right';
    case 'camera':
      return 'camera';
    case 'envelope':
      return 'envelope';
    case 'eye':
      return 'eye';
    case 'file-upload':
      return 'file-upload';
    case 'external-link-alt':
      return 'external-link-alt';
    case 'link':
      return 'link';
    case 'save':
      return 'save';
    case 'trash':
      return 'trash';
    case 'play':
      return 'play-circle';
    case 'hand-paper':
      return 'hand-paper';
    default:
      return 'check-circle';
  }
};

interface Props {
  title: string;
  icon?: IconOptions;
  disabled?: boolean;
  style?: object;
  icondisabled?: boolean;
  color: ButtonColor;
}

const NewScreen = ({title, icon, disabled = false, style, color}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <View
        style={[
          styles.button,
          {backgroundColor: getButtonColor(color)},
          disabled && {backgroundColor: 'gray'},
          style,
        ]}>
        <View style={styles.iconView}>
          {Boolean(icon) && (
            <Icon
              name={getIcon(icon!)}
              color={disabled ? Color.LightGray : 'white'}
              size={20}
            />
          )}
        </View>
        <View style={styles.textView}>
          <Text
            style={[
              styles.title,
              {color: disabled ? Color.LightGray : 'white'},
            ]}>
            {title.toUpperCase()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewScreen;
