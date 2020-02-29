import React, {Component} from 'react';
import {Text, View} from 'react-native';

type Props = {};

type State = {};

export default class NearbyStations extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 4,
          borderRadius: 4,
        }}>
        <Text style={{color: 'white'}}> Nearby stations </Text>
      </View>
    );
  }
}
