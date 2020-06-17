import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import styles from './App.js';
export default class TestElemComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles1.elem}>
        <View style={styles1.userInfo}>
          <View style={styles1.profile}></View>
          <Text style={styles1.name}>{this.props.name}</Text>
        </View>
        <View style={styles1.userComment}>
          <Text>{this.props.userComment}</Text>
        </View>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: 'green',
  },
  footer: {
    height: 60,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
  },
  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    padding: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userComment: {
    padding: 8,
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'yellow',
  },
  name: {
    paddingLeft: 10,
  },
});
