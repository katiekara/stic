import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample(props) {
  const { icon, title } = props;
  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icon} />
      <Text style={styles.paragraph}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 5,
  },
  // paragraph: {
  //   margin: 24,
  //   marginTop: 0,
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  logo: {
    height: 40,
    width: 40,
  }
});
