import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';

import Button from 'screens/opiner/components/Button';
import {wp} from 'utils/Constant';
import {rs} from 'utils/ResponsiveScreen';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  flatlist: {
    width: rs(318),
    height: rs(556),
    backgroundColor: 'white',
    borderRadius: 24,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  image: {
    width: rs(318),
    height: rs(180),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
  },
  flatlistinner: {
    padding: 12,
  },
  donate: {
    height: wp(12),
  },
  learnmore: {
    height: wp(10),
  },
  adidas: {
    width: rs(42),
    height: rs(40),
    alignSelf: 'center',
  },
  buttonspacing: {
    marginTop: 30,
  },
});

const DATA = [
  {
    image: require('assets/image/hen.png'),
    header: 'CharityName',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vel perferendis eos, natus ipsa tenetur hic ipsum sequi cum soluta eaque aperiam, neque sed modi? ',
  },
  {
    image: require('assets/image/hen.png'),
    header: 'CharityName',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vel perferendis eos, natus ipsa tenetur hic ipsum sequi cum soluta eaque aperiam, neque sed modi? ',
  },
  {
    image: require('assets/image/hen.png'),
    header: 'CharityName',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vel perferendis eos, natus ipsa tenetur hic ipsum sequi cum soluta eaque aperiam, neque sed modi? ',
  },
];

const Item = ({image, header, details}) => {
  return (
    <View style={styles.flatlist}>
      <ImageBackground style={styles.image} source={image}>
        <Image
          style={styles.adidas}
          source={require('assets/image/adidas.png')}
        />
      </ImageBackground>
      <View style={styles.flatlistinner}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.details}>{details}</Text>
        <View style={styles.buttonspacing}>
          <Button
            icon="hand-paper"
            color="blue"
            title="Donate £30"
            style={styles.donate}
          />
          <Button
            icon="check"
            color="black"
            title="learn more"
            style={styles.learnmore}
          />
        </View>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA}
          renderItem={({item}) => (
            <Item
              image={item.image}
              header={item.header}
              details={item.details}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default App;
