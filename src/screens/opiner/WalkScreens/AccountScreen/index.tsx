import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import Button from 'screens/opiner/components/Button';
import {wp} from 'utils/Constant';
import {rs} from 'utils/ResponsiveScreen';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'black',
    flex: 1,
  },
  image: {
    height: rs(168),
    width: rs(168),
    borderRadius: rs(84),
    alignSelf: 'center',
    marginTop: 8,
  },
  name: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 10,
  },
  info: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  notificationbox: {
    width: '100%',
    height: rs(157),
    backgroundColor: 'red',
    marginTop: 26,
    borderRadius: 12,
  },
  notification: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 12,
    fontSize: 12,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    width: rs(362),
    height: rs(40),
    alignSelf: 'center',
    marginVertical: 4,
  },
  flatlist: {
    width: rs(183),
    backgroundColor: 'gray',
    height: rs(120),
    borderRadius: 12,
    marginTop: 16,
    marginRight: 16,
    overflow: 'hidden',
  },
  topic: {
    fontSize: 12,
    color: '#5D5D5D',
    fontWeight: 'bold',
    marginLeft: 14,
    marginTop: 12,
  },
  design: {
    width: rs(48),
    height: rs(48),
    backgroundColor: 'red',
    borderRadius: rs(26),
    marginTop: -18,
    marginLeft: -20,
  },
  list: {
    flexDirection: 'row',
  },
  digit: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  updatebutton: {
    marginVertical: 16,
  },
  emailbutton: {
    height: wp(11),
    alignSelf: 'center',
  },
});

const DATA = [
  {
    topic: 'QUESTIONS',
    number: '10',
    color: '#5C5DC4',
  },
  {
    topic: 'RESPONSES',
    number: '6',
    color: '#F7A006',
  },
  {
    topic: 'EARNINGS',
    number: '£220',
    color: '#F7A006',
  },
  {
    topic: 'DONATIONS',
    number: '£120',
    color: '#F7A006',
  },
];

const Item = ({topic, number, color}) => {
  return (
    <View style={styles.flatlist}>
      <View style={styles.list}>
        <View style={[styles.design, {backgroundColor: color}]} />
        <Text style={styles.topic}>{topic}</Text>
      </View>
      <Text style={styles.digit}>{number}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <Image
            style={styles.image}
            source={require('assets/image/hen.png')}
          />
          <Text style={styles.name}>Hello Mary</Text>
          <Text style={styles.info}>You joined Opiner 125 days ago.</Text>
          <View style={styles.notificationbox}>
            <Text style={styles.notification}>NOTIFICATIONS</Text>
            <Text style={styles.details}>
              You don’t have push notfications enabled. This may result in you
              missing new question alerts.
            </Text>
            <Button
              icon="check"
              color="blue"
              title="Open notification settings"
              style={styles.button}
            />
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            data={DATA}
            renderItem={({item}) => (
              <Item
                topic={item.topic}
                number={item.number}
                color={item.color}
              />
            )}
          />
          <Button
            icon="check"
            color="blue"
            title="Update Your Info"
            style={styles.updatebutton}
          />
          <Button
            icon="envelope"
            color="gray"
            title="Email Support"
            style={styles.emailbutton}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
export default App;
