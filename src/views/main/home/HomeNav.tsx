import React,{Component} from 'react';
import {View,Image,TouchableWithoutFeedback} from 'react-native';
import styles from './styles';


import {inject} from 'mobx-react'

interface Props{
    store?:any
}

@inject('store')
export default class extends Component<Props>{
    render(){
        return(
            <View>
                <TouchableWithoutFeedback
                    onPress={()=>this.props.store.Navigation.navigation.navigate('List')}
                >
                    <View style={styles.nav}>
                        <Image style={styles.navImage} source={{uri:'https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png'}}></Image>
                        <Image style={styles.navImage} source={{uri:'https://goods8.juancdn.com/jas/180530/f/e/5b0e68b4b6f8ea11b8424b37_270x241.png?imageMogr2/quality/85!/format/png'}}></Image>
                        <Image style={styles.navImage} source={{uri:'https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png'}}></Image>
                        <Image style={styles.navImage} source={{uri:'https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png'}}></Image>
                    </View>
                </TouchableWithoutFeedback>
                
                <View style={styles.activityNav}>
                    <View style={{height:'100%',width:'50%'}}>
                        <Image style={{flex:1}} source={{uri:'https://s2.juancdn.com/jas/181130/e/d/5c00980133b0897f7e798bd6_540x656.gif'}} />
                    </View>
                    <View style={{height:'100%',width:'50%'}}>
                        <Image style={{flex:1}} source={{uri:'https://goods5.juancdn.com/jas/181130/9/a/5c0096c433b0893b6852bac2_540x328.png?iopcmd=convert&Q=85&dst=png'}}/>
                        <Image style={{flex:1}} source={{uri:'https://goods6.juancdn.com/jas/180831/a/4/5b889492b6f8ea1e2105263c_540x328.png?imageMogr2/quality/85!/format/png'}}/>
                    </View>
                </View>
                <Image style={{width:'100%',height:121.155}} source={{uri:'https://s2.juancdn.com/jas/181130/a/e/5c01041eb6f8ea53e17dbcc7_1080x349.gif'}} />
                <View style={styles.good}>
                    <Image style={{flex:1}} source={{uri:'https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png'}}/>
                </View>
            </View>
            
        )
    }
}