import React, { Component } from 'react'
import { View, Text, ImageBackground, StatusBar, Image,StyleSheet,TouchableOpacity } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from "react-navigation"

import { MessageToChat } from './ChatScreen'
// import { TitleBar } from './TitleBar';

class ContactsScreen extends Component {
    render() {
        return (
            <View>
                <View style={styles.titlBarWrap}>
                    <Text style={styles.title}>通信录</Text>
                    <View style={styles.funBtn}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image style={styles.ImgBtn} source={require('./img/search.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image style={styles.ImgBtn} source={require('./img/add.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text>通信录</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titlBarWrap:{
        flexDirection:"row",
        alignItems:"center",
        height:50,
        backgroundColor:"#EDEDED",
        justifyContent:"space-between",
        paddingHorizontal:15
    },
    title:{
        fontSize:18,
        color:"#000"
    },
    funBtn:{
        flexDirection:"row",
        alignItems:"center"
    },
    ImgBtn:{
        width:25,
        height:25,
        marginHorizontal:10
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
            default:
                icon = focused ? require("./img/messages-f.png") : require("./img/messages-nof.png")
                return <Image style={{ width: 28, height: 28 }} source={icon} />
                break;
        }
    }else {
        //渲染标签
        var tabNav = ['微信','通信录']
        color = focused ? "#05C160" : "black"
        return <Text style={{ color: color, fontSize: 12, alignSelf: "center" }}>{tabNav[page]}</Text>
    }
}

