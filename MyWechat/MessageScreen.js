import React, { Component } from 'react'
import { View, Text, ImageBackground, StatusBar, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
// import { createStackNavigator, createBottomTabNavigator } from "react-navigation"
import { TitleBar } from './TitleBar'

// itemView
class ItemView extends Component {
    render() {
        return (
            <View style={styles.itemWrap}>
                <Image style={styles.imgHead} source={this.props.userHead} />
                <View style={styles.itemContent}>
                    <View style={{flex:6,paddingRight:20}}>
                        <Text style={styles.name}>{this.props.name}</Text>
                        <Text style={styles.messages} numberOfLines={1}>{this.props.messages}</Text>
                    </View>
                    <Text style={styles.time}>{this.props.time}</Text>
                </View>
            </View>
        )
    }
}


export class MessageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgArr: []
        }
    }
    render() {
        var dataArr = new Array()
        var imgArr = [require('./img/userHead/文件传输.jpg'), require('./img/userHead/Hrealm.jpg'), require('./img/userHead/魔力伞.jpg'), require('./img/userHead/realm.jpg'), require('./img/userHead/微信支付.jpg'), require('./img/userHead/广州地跌.jpg'), require('./img/userHead/微信运动.jpg')]
        var nameArr = ["文件传输助手", "Hrealm", "魔力伞", "REALM", "微信支付", "广州地跌", "微信运动"]
        var timeArr = ["15:30", "17:00", "00:02", "昨天", "22:30", "21:01", "昨天"]

        for (let j = 0; j < 2; j++) {
            for (i = 0; i < nameArr.length; i++) {
                var item = { id: i, userHead: imgArr[i], name: nameArr[i], messages: this.state.msgArr[i], time: timeArr[i] }
                dataArr.push(item)
            }
        }
        

        return (
            <View style={{paddingBottom:50}}>
                <TitleBar title={"微信"} tips={"(2)"} />
                <FlatList
                    data={dataArr}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity activeOpacity={1}
                                onPress={()=>{
                                    this.props.navigation.navigate("Chat",{
                                        id:item.id,
                                        name:item.name,
                                        userHead:item.userHead,
                                        refresh:(id,messages) => {
                                            var newMsgArr = this.state.msgArr;
                                            newMsgArr[id] = messages;
                                            this.setState({msgArr:newMsgArr})
                                        }
                                    })
                                }}
                            >
                                <ItemView
                                    userHead={item.userHead}
                                    name={item.name}
                                    messages={item.messages}
                                    time={item.time}
                                >
                                </ItemView>
                            </TouchableOpacity>
                        )



                        // <TouchableOpacity
                        //     onPress={() => {
                        //         this.props.navigation.navigate(
                        //             "Chat",{
                        //                 id: item.id,
                        //                 name: item.name,
                        //                 //从下一个页面返回回来的数据在这里接收
                        //                 refresh: (id, message) => {
                        //                     //新建数组，将原数组内容赋给它
                        //                     var newMsgArr = this.state.msgArr
                        //                     //将新数组中id对应的元素赋给新建数组
                        //                     newMsgArr[id] = message
                        //                     //将修改后的新数组设置给state
                        //                     this.setState({ msgArr: newMsgArr })
                        //                 }
                        //             }
                        //         )
                        //     }}>

                        // {/* <View style={{ padding: 5, borderBottomColor: "#ccc", borderBottomWidth: 0.5, height: 70 }}>
                        //     <Text style={{ fontSize: 16 }}>
                        //         {item.name}
                        //     </Text>
                        //     <Text style={{ fontSize: 12 }}>
                        //         {item.messages}
                        //     </Text>
                        // </View> */}
                        // </TouchableOpacity>

                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        )
    }

    componentDidMount() {
        var defaultMsgArr = ["[文件]", "今晚吃什么", "借还伞", "今晚打球吗", "微信支付凭证", "[夜读]在变老的路上，变好", "[应用消息]"]
        this.setState({ msgArr: defaultMsgArr })
    }
}

const styles = StyleSheet.create({
    itemWrap:{
        height:80,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#fff",
        paddingLeft:15,
        // paddingVertical:15
    },
    imgHead:{
        width:60,
        height:60,
        borderRadius:5
    },
    itemContent:{
        flex:1,
        height:80,
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderBottomColor:"#D9D9D9",
        marginLeft:15,
        paddingRight:15,
        paddingVertical:10
    },
    userInfo:{
        flexDirection:"column"
    },
    name:{
        fontSize:18,
        color:"#000"
    },
    messages:{
        fontSize:16,
        color:"#9B9B9B",
        marginTop:7
    },
    time:{
        flex:1,
        fontSize:16,
        color:"#B2B2B2"
    }
});
