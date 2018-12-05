import React ,{ Component} from 'react';
import {View,Text,Image} from 'react-native';

import styles from './styles';
import {Fetch} from '../../util';


interface Props {
    navigation:any
}
interface State {
    detail:any
}
class DetailContainer extends Component<Props,State>{
    static navigationOptions = {
        title: '商品详情',
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
            detail:{}
        }
    }
    componentWillMount(){
        let id = this.props.navigation.getParam('id')
        this.getdetail(id);
        
    }
    render(){
        let {goods_origin_url,fprice,goods_title} = this.state.detail
        if(goods_origin_url === undefined) return false;
        return(
            <View style={styles.container}>
                <Image source={{uri:goods_origin_url.split('?')[0]}} style={styles.img}/>
                <View style={styles.description}>
                    <Text style={[styles.text,{color:'#ff464e',fontSize:20}]}>￥{fprice}</Text>
                    <Text style={styles.text}>{goods_title}</Text>
                </View>
                <View style={styles.addCar}>
                    <Text style={{color:'#fff',lineHeight:50,textAlign:'center'}}>加入购物车</Text>
                </View>
            </View>
        )
    }
    getdetail(id:any){
        Fetch(`/api/getMemberAboutInfo?goods_id=${id}&sa_id=19582500&is_pt_goods=0&req_coupons_id=${id}`)
            .then((result:any) => {
                this.setState({detail:result.skudata.info})
            })
    }

}
export default DetailContainer