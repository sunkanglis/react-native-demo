import React,{Component} from 'react';
import {FlatList} from 'react-native';
import {Fetch} from '../../util';

import GoodItem from '../../components/common/goodItem/GoodItem';



interface Props {}
interface State{
    goodLists:Array<any>,
    refreshing:boolean
}

export default class extends Component <Props,State>{
    static navigationOptions = {
        title: '商品列表',
        headerStyle: {
            backgroundColor: '#ff464e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 20,
        },
    };
    page:any
    constructor(props:any){
        super(props)
        this.state = {
            goodLists:[],
            refreshing: false
        }
        this.page =1 ;
    }
    componentDidMount(){
        this.getGoodLists()
    }
    render(){
        return(
                <FlatList style={{flex:1}}
                    data={this.state.goodLists}
                    numColumns={2}
                    keyExtractor={(item)=>item.goods_id}
                    onEndReachedThreshold={0.1}
                    onEndReached={()=>this.getGoodLists()}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.refreshing}
                    renderItem={({item})=>{
                        return <GoodItem key={item.goods_id} item={item} />
                    }}
                />
        )
    }
    _onRefresh = () => {
        this.setState({refreshing: true})
        setTimeout(() => {
            this.setState({refreshing: false})
        }, 1000)
    }
    getGoodLists(){
        Fetch(`/api/getGoods?page=${this.page}&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc`)
            .then((result:any) => {
                // let page = this.state.page;
                this.page++;
                let new_goodLists = [ ...this.state.goodLists, ...result.data.goods]
                this.setState({goodLists:new_goodLists});
            })
    }
}