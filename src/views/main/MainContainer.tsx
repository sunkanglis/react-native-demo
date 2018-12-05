import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {inject} from 'mobx-react'
import styles from './styles'

import HomeContainer from './home/HomeContainer'
import PictureContainer from './takePicture/PictureContainer'
import GdMapContainer from './gdMap/GdMapContainer'

const home = require('../../../assets/images/home.png')
const homeActive = require('../../../assets/images/home-active.png')
const classfiy = require('../../../assets/images/classfiy.png')
const classfiyActive = require('../../../assets/images/classfiy-active.png')
const car = require('../../../assets/images/car.png')
const carActive = require('../../../assets/images/car-active.png')
const mine = require('../../../assets/images/my.png')
const mineActive = require('../../../assets/images/my-active.png')


interface props {
    store?:any,
    navigation: any,
}
interface State { 
    selectedTab: string ,
    navs : Array<any>
}


@inject('store')
export default class  extends Component <props,State>{
    static navigationOptions = {
        title: '卷皮网',
        headerStyle: {
            backgroundColor: '#ff464e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 20,
        },
    };
    constructor(props:any){
        super(props)
        this.state = {
            selectedTab: 'home',
            navs:[
                {id:1,name:'home',title:'首页',icon:home,iconActive:homeActive,component:<HomeContainer></HomeContainer>},
                {id:2,name:'classfiy',title:'拍照',icon:classfiy,iconActive:classfiyActive,component:<PictureContainer />},
                {id:3,name:'car',title:'购物车',icon:car,iconActive:carActive,component:<Text>购物车</Text>},
                {id:4,name:'mine',title:'地图',icon:mine,iconActive:mineActive,component:<GdMapContainer />},
            ]

        }
    }
    componentWillMount(){
        this.props.store.Navigation.setNavigation(this.props.navigation)
    }
    render(){
        return(
            <View style={{flex:1}}>
                <TabNavigator>
                   {this.renderNavifgatorItem()}
                </TabNavigator>
            </View>
        )
    }
    renderNavifgatorItem(){
        return this.state.navs.map(nav=>{
            return(
                <TabNavigator.Item
                    key={nav.id}
                    selected={this.state.selectedTab === nav.name}
                    renderIcon={() => <Image style={styles.icon} source={nav.icon} />}
                    title={nav.title}
                    renderSelectedIcon={() => <Image style={styles.icon} source={nav.iconActive} />}
                    onPress={() => this.setState({ selectedTab: nav.name })}
                    titleStyle={{fontSize:12}}
                    selectedTitleStyle={{color:'#ff464e',fontSize:12}}>
                    {nav.component}
                </TabNavigator.Item>
            )
        })
    }
}