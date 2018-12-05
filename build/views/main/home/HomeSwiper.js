import React, { Component } from 'react';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import { Fetch } from '../../../util';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiperImgs: []
        };
    }
    componentDidMount() {
        this.getSwiperImg();
    }
    render() {
        return (React.createElement(Swiper, { height: 150, horizontal: true, showsPagination: false, loop: true, 
            // autoplay={true}
            showsButtons: false }, this.state.swiperImgs.map(item => (React.createElement(Image, { key: item.id, source: { uri: item.pic }, style: styles.swiperImg })))));
    }
    getSwiperImg() {
        Fetch('/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe')
            .then((result) => {
            this.setState({ swiperImgs: result.adsInfo.slide_ads.config.slide });
        });
    }
}
//# sourceMappingURL=HomeSwiper.js.map