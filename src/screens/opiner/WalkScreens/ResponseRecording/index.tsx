import React, {useRef} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

import Button from 'screens/opiner/components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  preview: {
    flex: 1,
  },
  buttonview: {},
  design: {
    marginVertical: 8,
  },
});

const App = () => {
  const camera = useRef<RNCamera>();

  const takePicture = async () => {
    if (camera) {
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }}
      />
      <View style={styles.buttonview}>
        <TouchableOpacity onPress={takePicture}>
          <Button
            title="Take Photo"
            icon="camera"
            color="blue"
            disabled={false}
            icondisabled={false}
            style={styles.design}
          />
        </TouchableOpacity>

        <Button
          title="Upload from library"
          icon="envelope"
          color="gray"
          disabled={false}
          icondisabled={false}
          style={styles.design}
        />
        <Button
          title="Cancel"
          color="gray"
          disabled={false}
          icondisabled={false}
          style={styles.design}
        />
      </View>
    </View>
  );
};

export default App;
