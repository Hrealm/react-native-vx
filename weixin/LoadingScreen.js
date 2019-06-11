import React, { Component } from 'react'
import { View, Text, ImageBackground, StatusBar } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from "react-navigation"
//先设置组件export default,,然后导入,,可导入多个Component
import { MainScreen } from './MainScreen'
import {LoginScreen} from './LoginScreen'

class LoadingScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* //隐藏状态栏 */}
                <StatusBar
                    hidden={true}
                />
                <ImageBackground
                    style={{ flex: 1 }}
                    source={require("./img/loading.jpg")}
                />
            </View>
        )
    }
    //组件生命周期方法，组件加载完后会回调
    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.navigation.navigate("Login")
        }, 2000)
    }
    //组件即将卸载时，清楚定时器
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer)
    }
}

const LoadingToMainStack = createStackNavigator(
    {
        Loading: { screen: LoadingScreen },
        Login:{screen:LoginScreen},
        Main: { screen: MainScreen }
    },{
        //去掉头部导航
        navigationOptions: { header: null }
    }
)

export default class MyWechat extends Component {
    render() {
        return (
            <LoadingToMainStack />
        )
    }
}