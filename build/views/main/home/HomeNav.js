var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { inject } from 'mobx-react';
let default_1 = class extends Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(TouchableWithoutFeedback, { onPress: () => this.props.store.Navigation.navigation.navigate('List') },
                React.createElement(View, { style: styles.nav },
                    React.createElement(Image, { style: styles.navImage, source: { uri: 'https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png' } }),
                    React.createElement(Image, { style: styles.navImage, source: { uri: 'https://goods8.juancdn.com/jas/180530/f/e/5b0e68b4b6f8ea11b8424b37_270x241.png?imageMogr2/quality/85!/format/png' } }),
                    React.createElement(Image, { style: styles.navImage, source: { uri: 'https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png' } }),
                    React.createElement(Image, { style: styles.navImage, source: { uri: 'https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png' } }))),
            React.createElement(View, { style: styles.activityNav },
                React.createElement(View, { style: { height: '100%', width: '50%' } },
                    React.createElement(Image, { style: { flex: 1 }, source: { uri: 'https://s2.juancdn.com/jas/181130/e/d/5c00980133b0897f7e798bd6_540x656.gif' } })),
                React.createElement(View, { style: { height: '100%', width: '50%' } },
                    React.createElement(Image, { style: { flex: 1 }, source: { uri: 'https://goods5.juancdn.com/jas/181130/9/a/5c0096c433b0893b6852bac2_540x328.png?iopcmd=convert&Q=85&dst=png' } }),
                    React.createElement(Image, { style: { flex: 1 }, source: { uri: 'https://goods6.juancdn.com/jas/180831/a/4/5b889492b6f8ea1e2105263c_540x328.png?imageMogr2/quality/85!/format/png' } }))),
            React.createElement(Image, { style: { width: '100%', height: 121.155 }, source: { uri: 'https://s2.juancdn.com/jas/181130/a/e/5c01041eb6f8ea53e17dbcc7_1080x349.gif' } }),
            React.createElement(View, { style: styles.good },
                React.createElement(Image, { style: { flex: 1 }, source: { uri: 'https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png' } }))));
    }
};
default_1 = __decorate([
    inject('store')
], default_1);
export default default_1;
//# sourceMappingURL=HomeNav.js.map