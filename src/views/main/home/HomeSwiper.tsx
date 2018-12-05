import React,{Component} from 'react';
import {Image} from 'react-native'
import Swiper from 'react-native-swiper';
import styles from './styles';

import {Fetch} from '../../../util'

interface Props{}
interface State{
    swiperImgs:Array<any>
}

export default class extends Component<Props,State>{
    constructor(props:any){
        super(props)
        this.state = {
            swiperImgs:[]
        }
    }
    componentDidMount(){
        this.getSwiperImg();
    }

    render(){
        return(
            <Swiper
                height={150}
                horizontal={true}
                showsPagination={false}
                loop={true}  
                // autoplay={true}
                showsButtons={false}>
                {
                    this.state.swiperImgs.map(item=>(
                        <Image key={item.id} source={{uri:item.pic}} style={styles.swiperImg}/>
                    ))
                }
            </Swiper>

        )
    }

    getSwiperImg(){
        Fetch('/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe')
            .then((result:any) => {
                this.setState({swiperImgs:result.adsInfo.slide_ads.config.slide})
            })
    } 

}