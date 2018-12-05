import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Fetch } from '../../util';
class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        };
    }
    componentWillMount() {
        let id = this.props.navigation.getParam('id');
        this.getdetail(id);
    }
    render() {
        let { goods_origin_url, fprice, goods_title } = this.state.detail;
        if (goods_origin_url === undefined)
            return false;
        return (React.createElement(View, { style: styles.container },
            React.createElement(Image, { source: { uri: goods_origin_url.split('?')[0] }, style: styles.img }),
            React.createElement(View, { style: styles.description },
                React.createElement(Text, { style: [styles.text, { color: '#ff464e', fontSize: 20 }] },
                    "\uFFE5",
                    fprice),
                React.createElement(Text, { style: styles.text }, goods_title)),
            React.createElement(View, { style: styles.addCar },
                React.createElement(Text, { style: { color: '#fff', lineHeight: 50, textAlign: 'center' } }, "\u52A0\u5165\u8D2D\u7269\u8F66"))));
    }
    getdetail(id) {
        Fetch(`/api/getMemberAboutInfo?goods_id=${id}&sa_id=19582500&is_pt_goods=0&req_coupons_id=${id}`)
            .then((result) => {
            this.setState({ detail: result.skudata.info });
        });
    }
}
DetailContainer.navigationOptions = {
    title: '商品详情',
    headerStyle: {
        backgroundColor: '#ff464e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontSize: 20,
    },
};
export default DetailContainer;
//# sourceMappingURL=DetailContainer.js.map