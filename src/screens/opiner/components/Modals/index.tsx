import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
} from 'react-native';

import Button from 'screens/opiner/components/Button';
import AlertIcons from 'screens/opiner/UpdatedComponents/AlertIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {wp} from 'utils/Constant';
import Color from 'utils/Color';
import {rs} from 'utils/ResponsiveScreen';
import {IconOptions} from 'screens/opiner/components/Button';
import {ButtonColor} from 'screens/opiner/components/Button';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'black',
    width: wp('100%'),
    padding: 16,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    alignItems: 'center',
  },
  modalTime: {
    marginVertical: 16,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 16,
    textAlign: 'center',
    color: '#fff',
  },
  alertBox: {
    backgroundColor: Color.DimmedGray,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 18,
  },
  alertIcon: {
    height: rs(44),
    width: rs(44),
    backgroundColor: Color.Green,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertText: {
    marginLeft: 14,
    fontSize: 16,
    color: '#fff',
  },
  quitButton: {
    width: rs(382),
    height: rs(56),
    backgroundColor: '#1e90ff',
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitButton: {
    width: rs(382),
    height: rs(56),
    backgroundColor: Color.Gray,
    borderRadius: 26,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
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
    color: '#fff',
  },
});
type AlertBoxOption = 'Red' | 'Green';

interface Props {
  alertText: string;
  info: string;
  showAlertBox?: boolean;
  disabled?: boolean;
  alertBoxColor?: AlertBoxOption;
  primaryButton?: {
    title: string;
    icon: IconOptions;
    color: ButtonColor;
    onPress: () => void;
    type: string;
  };
  secondaryButton?: {
    title: string;
    icon: IconOptions;
    onPress: () => void;
    type: string;
  };
  alertButton?: {
    icon: IconOptions;
    color: ButtonColor;
    onPress: () => void;
    type: string;
  };
}
const NewScreen = ({
  alertText,
  info,
  alertBoxColor,
  alertButton,
  primaryButton,
  secondaryButton,
  showAlertBox = false,
  disabled = false,
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity activeOpacity={0.85}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AlertIcons icon={alertButton?.icon} color={alertButton?.color} />
            <Text style={styles.modalTime}>{alertText}</Text>
            <Text style={styles.modalText}>{info}</Text>
            {showAlertBox && (
              <View style={styles.alertBox}>
                <View
                  style={[
                    styles.alertIcon,
                    {
                      backgroundColor:
                        alertBoxColor === 'Red' ? Color.Red : Color.Green,
                    },
                  ]}>
                  <Icon name="check-square" color="#fff" size={18} />
                </View>
                <Text style={styles.alertText}>
                  {'<Client name> '}
                  would like permission to share your response publicly (e.g. on
                  social media). Please check the box to grant permission, or
                  back if you'd rather opt out.
                </Text>
              </View>
            )}
            {primaryButton && (
              <Button
                disabled={disabled}
                title={primaryButton?.title?.toUpperCase()}
                icon={primaryButton.icon}
                color={primaryButton.color}
              />
            )}

            <Pressable
              style={styles.quitButton}
              onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.exitButton}>
                <View style={styles.iconView}>
                  <Icon name={secondaryButton?.icon} color="#fff" size={20} />
                </View>
                <View style={styles.textView}>
                  <Text style={styles.title}>
                    {secondaryButton?.title?.toUpperCase()}
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.quitButton}
        onPress={() => setModalVisible(true)}>
        <Text>Show updated Modal</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

export default NewScreen;
