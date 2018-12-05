import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import HomeSwiper from './HomeSwiper';
import HomeNav from './HomeNav';
import HomeContent from './HomeContent';
// import styles from './styles'
export default class extends Component {
    render() {
        return (React.createElement(ScrollView, null,
            React.createElement(HomeSwiper, null),
            React.createElement(HomeNav, null),
            React.createElement(HomeContent, null)));
    }
}
//# sourceMappingURL=HomeContainer.js.map