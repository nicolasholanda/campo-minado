import React from 'react';
import { StyleSheet, View } from 'react-native';
import Field from './src/componentes/Field'
import Flag from './src/componentes/Flag'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Field />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={4} />
        <Field opened nearMines={5} />
        <Field opened nearMines={6} />
        <Field mined opened exploded />
        <Field flagged />
        <Flag bigger/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
