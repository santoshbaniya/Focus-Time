import React from 'react';
import {StyleSheet, View} from 'react-native';

// import ActionButton from 'screens/opiner/components/ActionButton';
// import ActionActivity from 'screens/opiner/components/ActionActivity';
import {wp} from 'utils/Constant';
import Color from 'utils/Color';
// import {MainIconOptions} from '../ActionActivity';

const styles = StyleSheet.create({
  container: {
    width: wp(18),
    height: wp(18),
    backgroundColor: Color.LightGray,
    borderRadius: wp(9),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  title: {
    fontSize: 16,
  },
  tune: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },
  play: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

const App = ({mainicon}: {mainicon: MainIconOptions}) => {
  return (
    <View style={styles.tune}>
      <ActionButton
        icon="arrows-alt"
        dimmed={true}
        style={{
          height: wp(10),
          width: wp(10),
        }}
        size={16}
        color="DimmedGray"
      />
      <View style={styles.play}>
        <ActionButton
          icon="fast-backward"
          dimmed={true}
          style={{
            height: wp(12),
            width: wp(12),
          }}
          size={20}
          color="DimmedGray"
        />
        <ActionActivity
          mainicon={mainicon}
          style={{
            height: wp(15),
            width: wp(15),
          }}
          size={24}
          color="DimmedGray"
        />
        <ActionButton
          icon="fast-forward"
          dimmed={true}
          style={{
            height: wp(12),
            width: wp(12),
          }}
          size={20}
          color="DimmedGray"
        />
      </View>
      <ActionButton
        title="0.8x"
        icon="expand"
        dimmed={true}
        style={{
          height: wp(10),
          width: wp(10),
        }}
        size={16}
        color="DimmedGray"
      />
    </View>
  );
};

export default App;
