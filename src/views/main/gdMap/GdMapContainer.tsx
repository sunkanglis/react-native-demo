import React , {Component} from 'react';

import {View,WebView} from 'react-native';

export default class extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <WebView style={{flex:1}} source={{uri:'https://www.amap.com'}}>

                </WebView>
            </View>
        )
    }
}