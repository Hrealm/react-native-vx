import React, { Component } from 'react'
import { View, Text, ImageBackground, StatusBar, Image, SectionList, StyleSheet } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from "react-navigation"

import { FindScreen } from './FindScreen';
import { MeScreen } from './MeScreen';
import { MessageToChat } from './ChatScreen'
import { TitleBar } from './TitleBar';

class ItemView extends Component{
    render(){
        return(
            <View style={styles.userList}>
                <Image style={styles.userImg} source={this.props.userHead}/>
                <View style={styles.content}>
                    <Text style={styles.nameTxt}>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

class ContactsScreen extends Component {
    render() {
        const myHeadImg = require('./img/userHead/realm.jpg');
        return (
            <View style={{flex:1,backgroundColor:"#EDEDED"}}>
                <TitleBar title={"通讯录"}/>
                <SectionList
                    sections={[
                        {title:"",data:[{userHead:require('./img/newFriend.png'),name:"新的朋友"},{userHead:require('./img/群聊.png'),name:"群聊"},{userHead:require('./img/微信标签.png'),name:"标签"},{userHead:require('./img/公众号图标.png'),name:"公众号"}]},
                        {title:"A",data:[{userHead:myHeadImg,name:"阿猫"},{userHead:myHeadImg,name:"阿狗"}]},
                        {title:"B",data:[{userHead:myHeadImg,name:"B猫"},{userHead:myHeadImg,name:"B狗"}]},
                        {title:"C",data:[{userHead:myHeadImg,name:"C猫"},{userHead:myHeadImg,name:"C狗"}]},
                    ]}
                    renderSectionHeader={({section})=>{return <Text style={section.title == "" ? {display:"none"} : styles.sectionTitle}>{section.title}</Text>}}
                    renderItem={({item})=>{return(
                        <ItemView
                            userHead={item.userHead}
                            name={item.name}
                        >
                        </ItemView>
                    )}}
                    keyExtractor={(item,index)=>{index.toString()}}
                >

                </SectionList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sectionTitle:{
        marginLeft:15,
        color:"#767676",
        fontSize:18,
        marginVertical:5
    },
    userList:{
        flexDirection:"row",
        alignItems:"center",
        // paddingVertical:10,
        paddingLeft:15,
        height:70,
        backgroundColor:"#fff"
    },
    content:{
        flex:1,
        height:70,
        marginLeft:15,
        borderBottomWidth:0.8,
        borderBottomColor:"#D9D9D9",
        justifyContent:"center"
    },
    userImg:{
        width:48,
        height:48,
        borderRadius:5
    },
    nameTxt:{
        fontSize:18,
        color:"#000"
    }
});

export const TabNavigatorRoute = createBottomTabNavigator(
    {
        Message: {
            screen: MessageToChat,
            navigationOptions: {
                tabBarIcon: ({ focused }) => renderTabBar("icon", 0, focused),
                tabBarLabel: ({ focused }) => renderTabBar("label", 0, focused)
            }
        },
        Contacts: {
            screen: ContactsScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => renderTabBar("icon", 1, focused),
                tabBarLabel: ({ focused }) => renderTabBar("label", 1, focused)
            }
        },
        Find: {
            screen: FindScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => renderTabBar("icon", 2, focused),
                tabBarLabel: ({ focused }) => renderTabBar("label", 2, focused)
            }
        },
        Me: {
            screen: MeScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => renderTabBar("icon", 3, focused),
                tabBarLabel: ({ focused }) => renderTabBar("label", 3, focused)
            }
        }

    },{
        tabBarOptions:{
            // activeBackgroundColor: '#F7F7F7',//活动选项卡的背景颜色
            // inactiveBackgroundColor: '#F7F7F7',//非活动选项卡的背景颜色
            style:{
                backgroundColor:"#F7F7F7",
                height:53,
                paddingTop:6,
                paddingBottom:3
            }
        }
    }
)

function renderTabBar(part, page, focused) {
    //渲染图标
    if (part == "icon") {
        //page==0代表消息页
        switch (page) {
            case 0:
                icon = focused ? require("./img/messages-f.png") : require("./img/messages-nof.png")
                return <Image style={{ width: 28, height: 28 }} source={icon} />
                break;
            case 1:
                icon = focused ? require("./img/contacts-f.png") : require("./img/contacts-nof.png")
                return <Image style={{ width: 33, height: 33 }} source={icon} />
                break;
            case 2:
                icon = focused ? require("./img/find-f.png") : require("./img/find-nof.png")
                return <Image style={{ width: 30, height: 30 }} source={icon} />
                break;
            case 3:
                icon = focused ? require("./img/me-f.png") : require("./img/me-nof.png")
                return <Image style={{ width: 28, height: 28 }} source={icon} />
                break;
            default:
                icon = focused ? require("./img/messages-f.png") : require("./img/messages-nof.png")
                return <Image style={{ width: 28, height: 28 }} source={icon} />
                break;
        }
    }else {
        //渲染标签
        var tabNav = ['微信','通信录','发现','我']
        color = focused ? "#55C06A" : "black"
        return <Text style={{ color: color, fontSize: 12, alignSelf: "center" }}>{tabNav[page]}</Text>
    }
}
