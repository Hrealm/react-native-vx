import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, FlatList, ToastAndroid } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import { MessageScreen } from './MessageScreen';


class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            myMsgArr: [],
            youMsgArr: [],
            isShow: false
        }
    }

    render() {
        const data = this.props.navigation.state.params;
        const id = data.id;
        const name = data.name;
        const userHead = data.userHead;
        const myHeadImg = require('./img/userHead/realm.jpg');


        return (
            <View style={styles.root}>
                {/* titleBar */}
                <View style={styles.titleBar}>
                    <View style={styles.titleBarLeft}>
                        <TouchableOpacity activeOpacity={1}>
                            <Image style={styles.imgTitleBar} source={require('./img/return.png')} />
                        </TouchableOpacity>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <Image style={styles.imgTitleBar} source={require('./img/more.png')} />
                </View>
                {/* Content */}
                <View style={styles.content}>
                    
                </View>
                {/* edit */}
                <View style={styles.edit}>
                    <TextInput ref="refInput" style={styles.editText} onChangeText={(text) => {this.setState({message:text}), this.setState(text.length >= 1 ? { isShow: true } : { isShow: false })}}></TextInput>
                    <TouchableOpacity activeOpacity={0.9}>
                        <Image style={styles.positionImg} source={require('./img/坐标.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.isShow ? styles.sendBtn : { display: "none" }}
                        onPress={()=>{
                            
                        }}>
                        <Text style={styles.sendText}>发送</Text>
                    </TouchableOpacity>
                </View>
            </View>




            // <View style={{padding:5}}>
            //     <Text>
            //         {"你正在与"+name+"聊天\n发送的消息内容："}
            //     </Text>
            //     <Text>
            //         {this.state.message}
            //     </Text>
            //     {/* <TextInput ref="refInput" style={{borderBottomColor:"#aaa",borderBottomWidth:0.5}} 
            //     onChangeText={(text) => {editMsg = text
            //          this.setState(text.length >= 1 ? { isShow: true } : { isShow: false })}}></TextInput> */}
            //     <TextInput
            //     //取引用名称
            //         ref="refInput"
            //         style={{borderBottomColor:"#aaa",borderBottomWidth:0.5}}
            //         // onChangeText={(text)=>{
            //         //     editMsg = text
            //         // }}
            //         onChangeText={(text) => {
            //             editMsg = text;
            //         }}
            //     >
            //     </TextInput>
            //     <Button
            //         title="发送"
            //         onPress={()=>{
            //             this.setState({message:editMsg})
            //             //给引用名称叫“refInput”的组件清空内容
            //             this.refs.refInput.clear()
            //         }}
            //     />
            //     <View style={{marginTop:5}}>
            //         <Button title="返回"
            //             onPress={()=>{
            //                 //将id和message返回给上一页面
            //                 this.props.navigation.state.params.refresh(
            //                     id,this.state.message
            //                 )
            //                 //返回上一个页面
            //                 this.props.navigation.goBack()
            //             }}
            //         />
            //     </View>
            // </View>
        )
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