import React from 'react';
import {View, StyleSheet, Text, FlatList, SafeAreaView} from 'react-native';

import AlertButton from 'screens/opiner/UpdatedComponents/AlertIcons';
import Item from 'screens/opiner/components/QuestionFlatlist';
const DATA = [
  {
    icon: 'hockey-puck',
    time: '07:49, 05/04/2021',
    info: "We've paid £15 into your account. Enjoy!",
  },
  {
    icon: 'thumbs-up',
    time: '07:50, 05/04/2021',
    info:
      "Response approved. Who's awesome? You're awesome. We'll update you when your payment has been made.",
  },
  {
    icon: 'file',
    time: '07:50, 05/04/2021',
    info: "Response received - thanks! We'll review and update you ASAP.",
  },
  {
    icon: 'user-check',
    time: '07:50, 05/04/2021',
    info:
      "Thanks for opting in. We'll need your response by 09:37, 05/04/2021. If that's going to be tricky, please opt out as soon as possible (so we can ask the next person on the list).",
  },
  {
    icon: 'comment',
    time: '07:50, 05/04/2021',
    info:
      "New question! Please let us know within 2 hours if you're up for answering. The response deadline is midnight. Choose between a £15 payment or a £30 donation (your £15 plus £15 from us).",
  },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  title: {
    marginRight: 40,
  },
  zone: {
    padding: 16,
  },
  header: {
    marginBottom: 16,
    color: '#424242',
    fontSize: 12,
  },
});

const NewScreen = () => {
  const renderItem = ({item}) => (
    <Item icon={item.icon} info={item.info} time={item.time} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.zone}>
        <Text style={styles.header}>QUESTION HISTORY</Text>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.icon}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewScreen;
