import React, { Component } from 'react'
import { View,Text,Image, StyleSheet, StatusBar, FlatList } from 'react-native'

const moreImg =  require('./img/findPage/more.png')
class ItemView extends Component{
    render(){
        return(
            <View style={this.props.isPay ? styles.itemPay : this.props.isSetting ? styles.itemSetting : styles.itemWrap}>
                <Image style={styles.icon} source={this.props.icon}/>
                <View style={styles.contentView}>
                   <Text style={styles.titleTxt}>{this.props.title}</Text>
                   <Image style={styles.moreImg} source={moreImg}/>
                </View>
            </View>
        )
    }
}

export class MeScreen extends Component{
    render(){
        const iconArr = [require('./img/myPage/支付.png'),require('./img/myPage/收藏.png'),
            require('./img/myPage/相册.png'),require('./img/myPage/卡包.png'),
            require('./img/myPage/表情.png'),require('./img/myPage/设置.png')]
        var contentList = [
            {icon:iconArr[0],title:"支付",isPay:true},
            {icon:iconArr[1],title:"收藏"},
            {icon:iconArr[2],title:"相册"},
            {icon:iconArr[3],title:"卡包"},
            {icon:iconArr[4],title:"表情"},
            {icon:iconArr[5],title:"设置",isSetting:true}
        ]
        return(
            <View style={{flex:1,backgroundColor:"#EDEDED"}}>
                {/* header */}
                <View style={styles.headerWrap}>
                    <View style={styles.myTitle}>
                        <Image style={styles.cameraImg} source={require('./img/myPage/相机.png')}/>
                    </View>
                    <View style={styles.userInfo}>
                        <Image style={styles.userHead} source={require('./img/userHead/realm.jpg')}/>
                        <View style={styles.userName}>
                            <Text style={styles.nameTxt}>Hrealm</Text>
                            <View style={styles.idWrap}>
                                <Text style={styles.idTxt} numberOfLines={1}>微信号：Hrealm.github.io</Text>
                                <View style={styles.QRcodeWrap}>
                                    <Image style={styles.moreImg} source={require('./img/myPage/名片二维码.png')}/>
                                    <Image style={styles.moreImg} source={moreImg}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* content */}
                <FlatList
                    data={contentList}
                    renderItem={({item})=>{
                        return(
                            <ItemView
                                icon={item.icon}
                                title={item.title}
                                isPay={item.isPay}
                                isSetting={item.isSetting}
                            ></ItemView>
                        )
                    }}
                    keyExtractor={(item,index)=>index.toString()}
                >

                </FlatList>
            </View>
        )
    }
    componentDidMount(){
        this.navListener = this.props.navigation.addListener('didFocus',()=>{
            StatusBar.setBackgroundColor("#ffffff");
        })
    }
    componentWillUnmount(){
        this.navListener.remove();
    }
}

const styles = StyleSheet.create({
    headerWrap:{
        backgroundColor:"#fff",
        paddingHorizontal:20,
        borderBottomWidth:1,
        borderBottomColor:"#D5D5D5",
        marginBottom:10
    },
    myTitle:{
        height:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
        backgroundColor:"#fff"
    },
    cameraImg:{
        width:30,
        height:30
    },
    userInfo:{
        height:150,
        flexDirection:"row",
        alignItems:"center"
    },
    userHead:{
        width:70,
        height:70,
        borderRadius:8
    },
    userName:{
        flex:1,
        height:73,
        marginLeft:23,
    },
    nameTxt:{
        fontSize:26,
        color:"#000"
    },
    idWrap:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:50,
        marginTop:10
    },
    idTxt:{
        flex:5,
        fontSize: 18,
        color:"#7F7F7F"
    },
    QRcodeWrap:{
        flex:1.2,
        marginLeft:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    moreImg:{
        width:20,
        height:20
    },
    itemPay:{
        height:60,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        borderTopWidth:0.8,
        borderBottomWidth:0.8,
        borderColor:"#D9D9D9",
        marginBottom:10,
        paddingLeft:20,
    },
    itemSetting:{
        height:60,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        borderTopWidth:0.8,
        borderBottomWidth:0.8,
        borderColor:"#D9D9D9",
        marginTop:10,
        paddingLeft:20,
    },
    itemWrap:{
        height:60,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        paddingLeft:20,
    },
    contentView:{
        flex:1,
        height:60,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomWidth:0.5,
        borderBottomColor:"#D9D9D9",
        marginLeft:5,
        paddingRight:20
    },
    icon:{
        width:28,
        height:28,
        marginHorizontal:5
    },
    titleTxt:{
        fontSize:18,
        color:"#000",
        marginLeft:10
    },
})