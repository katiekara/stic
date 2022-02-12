import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Modal, ImageViewer } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import AssetTitle from './components/AssetTitle';
import Linking from './components/Linking';
import ModalComponent from './components/ModalComponent';

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
import zoom from './assets/zoom.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
        <View style={styles.row}>
          <AssetTitle icon={imageTitle} title="" />
        </View>
        <View style={styles.row}>
          <ModalComponent icon={image1}/>
          <ModalComponent icon={image2}/>
        </View>
        <View style={styles.row}>
          <ModalComponent icon={image3}/>
          <ModalComponent icon={image4}/>
          <ModalComponent icon={image5} url="https://us05web.zoom.us/j/9339939148?pwd=ampVVVRZMGkwem10Q3FJQVJvR3c1QT09" />
        </View>
          <View style={styles.row}>
          <ModalComponent icon={image6}/>
          <ModalComponent icon={image7} url="https://www.instagram.com" />
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});
