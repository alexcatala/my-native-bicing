import React, {Component} from 'react';
import {Text, View} from 'react-native';

type Props = {freeSlots: number; bikes: number};

type State = {};

export default class HomeStation extends Component<Props, State> {
  render() {
    return (
      <View
        style={{
          height: 100,
          margin: 5,
          borderRadius: 4,
          borderColor: '#c4c4c4',
          borderStyle: 'solid',
          borderWidth: 2,
          padding: 5,
        }}>
        <Text
          style={{
            fontSize: 24,
            textAlign: 'center',
          }}>
          Home station
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'space-around',
          }}>
          <Text> Free slots: {this.props.freeSlots} </Text>
          <Text> Bikes: {this.props.bikes} </Text>
        </View>
      </View>
    );
  }
}
