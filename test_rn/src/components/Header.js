import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Test Project</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#212529',
  },
  text: {
    color: '#fff',
  },
});
