import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { Provider } from 'mobx-react';
import store from './store';
import MainContainer from './views/main/MainContainer';
import DetailContainer from './views/detail/DetailContainer';
import ListContainer from './views/list/ListContainer';
class App extends Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Provider, { store: store },
                React.createElement(AppNavigator, null))));
    }
}
const AppNavigator = createStackNavigator({
    Home: MainContainer,
    Details: DetailContainer,
    List: ListContainer
}, {
    initialRouteName: "Home"
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //  paddingTop: 22,
        backgroundColor: 'rgb(244,244,248)'
    }
});
export default (App);
//# sourceMappingURL=App.js.map