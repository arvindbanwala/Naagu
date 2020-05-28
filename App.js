/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import {SafeAreaView, StyleSheet, View, Button, Text} from 'react-native';

class App extends Component {
  // decrementCount() {
  //   let { count } = this.props.countsData;
  //   count--;
  //   this.setState({
  //     count
  //   })
  //   this.props.actions.countsAction.changeCount(count);
  // }
  // incrementCount() {
  //   let { count } = this.props.countsData;
  //   count++;
  //   this.setState({
  //     count
  //   })
  //   this.props.actions.countsAction.changeCount(count);
  //   // console.error();
  // }
  render() {
    const { count } = this.props.countsData;
    return (
        <View styles={styles.container}>
          {/*<Button*/}
          {/*    title="increment"*/}
          {/*    onPress={() => this.incrementCount()}*/}
          {/*/>*/}
          {/*<Text>{count}</Text>*/}
          {/*<Button*/}
          {/*    title="decrement"*/}
          {/*    onPress={() => this.decrementCount()}*/}
          {/*/>*/}
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
