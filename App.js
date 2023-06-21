import React from 'react';
// import {StatusBar} from 'expo-status-bar';
import Navigation from './src/navigation';
import {StyleSheet, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
