import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import AssetTitle from './components/AssetTitle';
import Linking from './components/Linking';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import image1 from './assets/icon-1.jpg';
import image2 from './assets/icon-2.jpg';
import image3 from './assets/icon-3.jpg';
import image4 from './assets/icon-4.jpg';
import image5 from './assets/icon-5.jpg';
import image6 from './assets/icon-6.jpg';
import image7 from './assets/icon-7.jpg';
import imageTitle from './assets/title.jpg';
import background from './assets/background.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
        <View style={styles.row}>
          <AssetTitle icon={imageTitle} title="" />
        </View>
        <View style={styles.row}>
          <AssetExample icon={image1} title="" />
          <AssetExample icon={image2} title="" />
        </View>
        <View style={styles.row}>
          <AssetExample icon={image3} title="" />
          <AssetExample icon={image4} title="" />
          <AssetExample icon={image5} title="" />
        </View>
          <View style={styles.row}>
          <AssetExample icon={image6} title="" />
          <AssetExample icon={image7} title="" />
        </View>
      </ImageBackground>      
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 0,
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
