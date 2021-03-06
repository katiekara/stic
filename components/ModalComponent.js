import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, Linking } from "react-native";

import zoomImage from '../assets/zoom.jpg';

const App = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { icon, title, url } = props;

  const handleIconPress = async () => {
    if (url !== undefined) {
      const isUrlSupported = await Linking.canOpenURL(url);

      if (isUrlSupported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('This link is not supported by this device');
      }
    } else {
      setModalVisible(true);
    }


    
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
            <Image style={styles.modalImage} source={zoomImage} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>&lt;</Text>
            </Pressable>
        </View>
      </Modal>
      <Pressable
        onPress={handleIconPress}
      >
        <Image style={styles.logo} source={icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
  },
  modalImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: "100%",
  },
  button: {
    position: "absolute",
    top: 48,
    left: 16,
    borderRadius: 20,
    padding: 10,
  },
  buttonClose: {
    fontSize: 36,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  logo: {
    height: 90,
    width: 90,
  }
});

export default App;