var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { inject } from 'mobx-react';
import styles from './styles';
import HomeContainer from './home/HomeContainer';
import PictureContainer from './takePicture/PictureContainer';
import GdMapContainer from './gdMap/GdMapContainer';
const home = require('../../../assets/images/home.png');
const homeActive = require('../../../assets/images/home-active.png');
const classfiy = require('../../../assets/images/classfiy.png');
const classfiyActive = require('../../../assets/images/classfiy-active.png');
const car = require('../../../assets/images/car.png');
const carActive = require('../../../assets/images/car-active.png');
const mine = require('../../../assets/images/my.png');
const mineActive = require('../../../assets/images/my-active.png');
let default_1 = class default_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            navs: [
                { id: 1, name: 'home', title: '首页', icon: home, iconActive: homeActive, component: React.createElement(HomeContainer, null) },
                { id: 2, name: 'classfiy', title: '拍照', icon: classfiy, iconActive: classfiyActive, component: React.createElement(PictureContainer, null) },
                { id: 3, name: 'car', title: '购物车', icon: car, iconActive: carActive, component: React.createElement(Text, null, "\u8D2D\u7269\u8F66") },
                { id: 4, name: 'mine', title: '地图', icon: mine, iconActive: mineActive, component: React.createElement(GdMapContainer, null) },
            ]
        };
    }
    componentWillMount() {
        this.props.store.Navigation.setNavigation(this.props.navigation);
    }
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(TabNavigator, null, this.renderNavifgatorItem())));
    }
    renderNavifgatorItem() {
        return this.state.navs.map(nav => {
            return (React.createElement(TabNavigator.Item, { key: nav.id, selected: this.state.selectedTab === nav.name, renderIcon: () => React.createElement(Image, { style: styles.icon, source: nav.icon }), title: nav.title, renderSelectedIcon: () => React.createElement(Image, { style: styles.icon, source: nav.iconActive }), onPress: () => this.setState({ selectedTab: nav.name }), titleStyle: { fontSize: 12 }, selectedTitleStyle: { color: '#ff464e', fontSize: 12 } }, nav.component));
        });
    }
};
default_1.navigationOptions = {
    title: '卷皮网',
    headerStyle: {
        backgroundColor: '#ff464e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontSize: 20,
    },
};
default_1 = __decorate([
    inject('store')
], default_1);
export default default_1;
//# sourceMappingURL=MainContainer.js.map