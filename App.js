import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from './assets/happy'

export default function App(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon 
        stroke={'#000'} fill={'#fff'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
