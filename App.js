import React from 'react';
import { StyleSheet, View } from 'react-native';
import Field from './src/componentes/Field'
import MineField from './src/componentes/MineField'
import { createMinedBoard } from './src/functions'
import params from './src/params'

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const rows = params.getRowsAmount()
    const cols = params.getColumnsAmount()
    return Math.ceil(rows * cols * params.difficultLevel)
  }

  createState = () => {
    const rows = params.getRowsAmount()
    const cols = params.getColumnsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount())
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})
