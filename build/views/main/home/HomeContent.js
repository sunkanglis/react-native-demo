import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { Fetch } from '../../../util/index';
import GoodItem from '../../../components/common/goodItem/GoodItem';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seleted: 'tab_hpzc',
            navs: [
                { id: 1, name: 'tab_hpzc', title: '精选专场' },
                { id: 2, name: 'tab_hpdp', title: '精选单品' }
            ],
            goodLists: [],
            page: 1,
        };
    }
    componentDidMount() {
        this.getGoodLists();
    }
    render() {
        // alert(this.state.goodLists)
        return (React.createElement(View, null,
            React.createElement(View, { style: styles.connectNav }, this.renderNav()),
            React.createElement(FlatList, { ref: (fl) => this.fl = fl, data: this.state.goodLists, numColumns: 2, keyExtractor: (item) => item.goods_id, onEndReachedThreshold: 0.1, renderItem: ({ item }) => {
                    return React.createElement(GoodItem, { key: item.goods_id, item: item });
                } })));
    }
    componentDidUpdate() {
        this.fl.recordInteraction();
    }
    renderNav() {
        return this.state.navs.map(nav => {
            return (React.createElement(TouchableOpacity, { key: nav.id, onPress: () => this.changeLists(nav.name) },
                React.createElement(View, { style: nav.name === this.state.seleted ? styles.navViewActivity : styles.navViewCommon },
                    React.createElement(Text, { style: nav.name === this.state.seleted ? styles.navTextActivity : styles.navTextCommon }, nav.title))));
        });
    }
    changeLists(name) {
        this.setState({ seleted: name, page: 1, goodLists: [] }, () => this.getGoodLists());
    }
    getGoodLists() {
        Fetch(`/api/getGoods?page=${this.state.page}&zy_ids=p8_c4_l4&app_name=zhe&catname=${this.state.seleted}&flag=${this.state.seleted}`)
            .then((result) => {
            // let page = this.state.page;
            let lists = this.state.goodLists;
            lists = lists.concat(result.data.goods);
            this.setState({ goodLists: lists, page: this.state.page + 1 });
        });
    }
}
//# sourceMappingURL=HomeContent.js.map