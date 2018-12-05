import React,{Component} from 'react';
import {ScrollView } from 'react-native';

import HomeSwiper from './HomeSwiper';
import HomeNav from './HomeNav'
import HomeContent from './HomeContent'
// import styles from './styles'

export default class extends Component{
    render(){
        return(
            <ScrollView>
                <HomeSwiper></HomeSwiper>
                <HomeNav></HomeNav>
                <HomeContent></HomeContent>
            </ScrollView>
        )
    }
}