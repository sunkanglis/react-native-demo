import React , {Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import {inject} from 'mobx-react';

interface Props {
    item:any,
    store?:any
}
@inject('store')
class GoodItem extends Component<Props>{
    constructor(props:any){
        super(props)
    }
    render(){
        let {cprice,oprice,pic_url,title,goods_id} =this.props.item
        return(
            <TouchableWithoutFeedback
                onPress ={()=>this.props.store.Navigation.navigation.navigate('Details',{
                    id:goods_id
                })}
            >
                <View style={styles.container}>
                <Image style={styles.bigImage} source={{uri:pic_url}}/>
                <View style={styles.description}>
                    <Text style={[styles.text,{color:'#ff464e'}]}>{cprice}</Text>
                    <Text style={{color:'#bbb',fontSize:10,textDecorationLine:'line-through',lineHeight:22.5}}>{oprice}</Text>
                </View>
                <View style={[styles.description,{width:140}]}>
                    <Text numberOfLines={1} style={styles.text}>{title}</Text>
                </View>
                </View>
            </TouchableWithoutFeedback>
            
        )
    }
}
export default GoodItem