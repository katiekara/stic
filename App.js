import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import image1 from './assets/icon-1.png';
import image2 from './assets/icon-2.png';
import image3 from './assets/icon-3.png';
import image4 from './assets/icon-4.png';
import image5 from './assets/icon-5.png';
import image6 from './assets/icon-6.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        關愛360
      </Text>
      <View style={styles.row}>
        <AssetExample icon={image1} title="親情監護" />
        <AssetExample icon={image2} title="視像通話" />
        <AssetExample icon={image3} title="智能問答" />
      </View>
      <View style={styles.row}>
        <AssetExample icon={image4} title="VR重遊舊地" />
        <AssetExample icon={image5} title="提醒事項" />
        <AssetExample icon={image6} title="健康監測" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});
