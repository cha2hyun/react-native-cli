import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TestElemComponent from './TestElemComponent.js';
import TestComponent from './TestComponent.js';
const datas = [
  {key: '1', name: '김치1', userComment: '빌리아드1'},
  {key: '2', name: '김치2', userComment: '빌리아드2'},
];
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {datas: datas};
  }
  _updateCount(idx) {
    const newDatas = [...this.state.datas];
    this.setState({datas: newDatas});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.content}>
          {this.state.datas.map((data, index) => {
            return (
              <TestElemComponent
                key={data.key}
                name={data.name}
                userComment={data.userComment}
              />
            );
          })}
        </View>

        <View style={styles.footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
