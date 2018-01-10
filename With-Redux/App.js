import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainView from './Components/MainView';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Components/Lunch'
import reducers from './Reducers/'

const store = createStore(reducers);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <MainView />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});