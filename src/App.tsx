import React, { Component } from 'react';
import {  StyleSheet,  View } from 'react-native';
import { createStackNavigator } from "react-navigation";
import {Provider} from 'mobx-react';
import store from './store'

import MainContainer from './views/main/MainContainer'
import DetailContainer from './views/detail/DetailContainer'
import ListContainer from './views/list/ListContainer'
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <AppNavigator></AppNavigator>
        </Provider>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: MainContainer,
    Details: DetailContainer,
    List:ListContainer
  },
  {
    initialRouteName: "Home"
  }
);

const styles = StyleSheet.create({
  container: {
   flex: 1,
  //  paddingTop: 22,
   backgroundColor:'rgb(244,244,248)'
  }
})

export default (App);