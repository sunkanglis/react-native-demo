var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { inject } from 'mobx-react';
let GoodItem = class GoodItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { cprice, oprice, pic_url, title, goods_id } = this.props.item;
        return (React.createElement(TouchableWithoutFeedback, { onPress: () => this.props.store.Navigation.navigation.navigate('Details', {
                id: goods_id
            }) },
            React.createElement(View, { style: styles.container },
                React.createElement(Image, { style: styles.bigImage, source: { uri: pic_url } }),
                React.createElement(View, { style: styles.description },
                    React.createElement(Text, { style: [styles.text, { color: '#ff464e' }] }, cprice),
                    React.createElement(Text, { style: { color: '#bbb', fontSize: 10, textDecorationLine: 'line-through', lineHeight: 22.5 } }, oprice)),
                React.createElement(View, { style: [styles.description, { width: 140 }] },
                    React.createElement(Text, { numberOfLines: 1, style: styles.text }, title)))));
    }
};
GoodItem = __decorate([
    inject('store')
], GoodItem);
export default GoodItem;
//# sourceMappingURL=GoodItem.js.map