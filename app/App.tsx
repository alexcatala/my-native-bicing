import React, {Component} from 'react';
import {View, Text} from 'react-native';
import HomeStation from './HomeStation';
import NearbyStations from './NearbyStations';

type State = {
  stationsStatus: any[];
  stationsInformation: any[];
  homeStation: {freeSlots: number; bikes: number};
};

type Props = {};

const HOME_STATION_ID = 5;

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      stationsInformation: [],
      stationsStatus: [],
      homeStation: {freeSlots: 0, bikes: 0},
    };
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <HomeStation
          freeSlots={this.state.homeStation.freeSlots}
          bikes={this.state.homeStation.bikes}></HomeStation>
        <NearbyStations></NearbyStations>
      </View>
    );
  }

  componentDidMount() {
    this.getStationsInformation().then(stationsInformation => {
      this.setState({stationsInformation});
    });

    setInterval(() => {
      this.getStationsStatus().then(stationsStatus => {
        const homeStation = this.findStation(stationsStatus);

        this.setState({
          stationsStatus,
          homeStation: {
            freeSlots: homeStation['num_docks_available'],
            bikes: homeStation['num_bikes_available_types']['mechanical'],
          },
        });
      });
    }, 5000);
  }

  private async getStationsInformation(): Promise<any[]> {
    return fetch(
      'https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_information',
    )
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.data.stations as any;
      })
      .catch(error => {
        console.error(error);
      });
  }

  private async getStationsStatus(): Promise<any> {
    return fetch('https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_status')
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.data.stations as any[];
      })
      .catch(error => {
        console.error(error);
      });
  }

  private findStation(stations: any[]) {
    return stations.find(station => station['station_id'] === HOME_STATION_ID);
  }
}

export default App;
