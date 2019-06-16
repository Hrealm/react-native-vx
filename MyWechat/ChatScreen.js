import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, FlatList, ToastAndroid, Alert } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import { MessageScreen } from './MessageScreen';

//msgList-ItemView
class ItemView extends Component {
    render() {
        return (
            <View>
                <View style={styles.myMsgList}>
                    <Text style={styles.myMsgText}>{this.props.myMsg}</Text>
                    <Image style={styles.HeadImg} source={this.props.myHead} />
                </View>
                <View style={this.props.youMsg == "" ? {display:"none"} : styles.youMsgList}>
                    <Image style={styles.HeadImg} source={this.props.youHead} />
                    <Text style={styles.youMsgText}>{this.props.youMsg}</Text>
                </View>
            </View>
        )
    }
}

class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            myMsgArr: [],
            youMsgArr: [],
            isShow: false,
            result:""
        }
    }

    render() {
        const data = this.props.navigation.state.params;
        const id = data.id;
        const name = data.name;
        const userHead = data.userHead;
        const myHeadImg = require('./img/userHead/realm.jpg');
        var arr1 =[],arr2=[]
        arr1 = this.state.myMsgArr
        arr2 = this.state.youMsgArr

        var msgList = [];
        // var myMsgArr = ["今晚吃什么","吃完饭打球吗","ok"];
        // var youMsgArr = ["黄焖鸡","记得叫我",""];
        for (let i = 0; i < this.state.myMsgArr.length; i++) {
            var item = {myMsg:this.state.myMsgArr[i],myHead: myHeadImg,youHead: userHead, youMsg: this.state.youMsgArr[i]}
            msgList.push(item)
        }

        return (
            <View style={styles.root}>
                {/* titleBar */}
                <View style={styles.titleBar}>
                    <View style={styles.titleBarLeft}>
                        <TouchableOpacity activeOpacity={1}
                            onPress={()=>{this.props.navigation.state.params.refresh(id,this.state.message),this.props.navigation.goBack()}}>
                            <Image style={styles.imgTitleBar} source={require('./img/return.png')} />
                        </TouchableOpacity>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <Image style={styles.imgTitleBar} source={require('./img/more.png')} />
                </View>

                {/* Content */}
                <View style={styles.content}>
                    <FlatList
                        data={msgList}
                        renderItem={({ item }) => {
                            return (
                                <ItemView
                                    myMsg={item.myMsg}
                                    myHead={item.myHead}
                                    youHead={item.youHead}
                                    youMsg={item.youMsg}
                                >
                                </ItemView>
                            )
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                
                {/* edit */}
                <View style={styles.edit}>
                    <Image style={styles.voice} source={require('./img/voice.png')} />
                    <TextInput ref="refInput" style={styles.editText} onChangeText={(text) => {
                        this.setState({message:text}), 
                        this.setState(text.length >= 1 ? { isShow: true } : { isShow: false })
                        }}></TextInput>
                    <TouchableOpacity activeOpacity={0.9}
                        onPress={()=>{
                            Alert.alert("发送定位","",[{
                                text:"确定",
                                onPress:()=>{
                                    arr1.push(this.state.result)
                                    arr2.push("")
                                    this.setState({myMsgArr:arr1,youMsgArr:arr2,message:result})
                                }
                            }])
                        }}>
                        <Image style={styles.positionImg} source={require('./img/坐标.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.isShow ? styles.sendBtn : { display: "none" }}
                        onPress={()=>{
                            arr1.push(this.state.message)
                            arr2.push("")
                            this.setState({myMsgArr:arr1,youMsgArr:arr2})
                            this.refs.refInput.clear()
                            this.setState({isShow:false})
                        }}>
                        <Text style={styles.sendText}>发送</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    componentDidMount(){
        var defaultMyMsg = ["今晚吃什么","吃完饭打球吗","ok"];
        var defaultyouMsg = ["黄焖鸡","记得叫我",""];
        this.setState({myMsgArr:defaultMyMsg,youMsgArr:defaultyouMsg,message:defaultMyMsg[0]})
        navigator.geolocation.getCurrentPosition(
            (location)=>{
                    result="纬度："+ location.coords.latitude +
                    "经度：" + location.coords.longitude
                    this.setState({result:result})
                }
        )
        this.watchId=navigator.geolocation.watchPosition(
            (location)=>{
                result="纬度："+ location.coords.latitude + "经度：" + location.coords.longitude
                this.setState({result:result})
            }
        )
    }
    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchId)
    }
}

export const MessageToChat = createStackNavigator(
    {
        Message: { screen: MessageScreen },
        Chat: { screen: ChatScreen }
    }, {
        navigationOptions: { header: null }
    }
)

MessageToChat.navigationOptions = ({ navigation }) => {
    return {
        //MessageScreen对应的index为0，Chat是1
        tabBarVisible: navigation.state.index == 0
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "space-between"
    },
    titleBar: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        backgroundColor: "#EDEDED",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        borderBottomColor: "#D5D5D5",
        borderBottomWidth: 0.5
    },
    titleBarLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    imgTitleBar: {
        width: 20,
        height: 20
    },
    name: {
        fontSize: 20,
        color: "#000",
        marginLeft: 13
    },
    content: {
        flex: 1,
        backgroundColor: "#EDEDED"
    },
    myMsgList: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginVertical: 15,
        marginLeft:100,
        paddingHorizontal: 15
    },
    myMsgText: {
        fontSize: 18,
        color: "#000",
        backgroundColor: "#A9EA7A",
        paddingVertical: 13,
        paddingHorizontal: 13,
        marginRight: 8,
        borderRadius: 5
    },
    HeadImg: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    youMsgList: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 15,
        paddingHorizontal: 15
    },
    youMsgText: {
        fontSize: 18,
        color: "#000",
        backgroundColor: "#fff",
        paddingVertical: 13,
        paddingHorizontal: 13,
        marginLeft: 8,
        borderRadius: 5
    },
    edit: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: "#F7F7F7",
        borderTopWidth: 1,
        borderTopColor: "#E5E5E5"
    },
    voice: {
        width: 30,
        height: 30
    },
    editText: {
        height: 35,
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 0,
        marginLeft: 10,
        fontSize: 16,
        color: "#000"
    },
    positionImg: {
        width: 25,
        height: 25,
        marginLeft: 10
    },
    sendBtn: {
        height: 35,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#57BE6A",
        borderRadius: 5,
        marginLeft: 12
    },
    sendText: {
        fontSize: 16,
        color: "#fff",
    }
});