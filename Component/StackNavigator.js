import React, { Component } from 'react'
import { View, Text, Button, ToastAndroid } from 'react-native'
import { createStackNavigator } from 'react-navigation'

//定义登录页面
class LoginScreen extends Component {
    //初始化
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }
    render() {
        return (
            <View>
                <Button
                    title="跳转到主页"
                    onPress={() => {
                        this.props.navigation.navigate("Main", {
                            admin: "aaa",
                            pass: "111",
                            //在事件函数refresh中接收下一个页面返回回来的数据
                            //在参数data中
                            refresh: (data) => {
                                // ToastAndroid.show(data, ToastAndroid.SHORT)
                                //把data显示在页面组件中，此时页面状态发生了改变

                                //二、设置state
                                this.setState({ text: data })
                            }
                        })
                    }}
                />
                <Text>{this.state.text}</Text>
            </View>
        )
    }
}

//定义主页
class MainScreen extends Component {
    render() {
        const data = this.props.navigation.state.params
        let text = "admin:" + data.admin + "\npass:" + data.pass
        return (
            <View>
                <Text>{text}</Text>
                <Button
                    title="返回"
                    onPress={() => {
                        //向上一个页面返回数据
                        this.props.navigation.state.params.refresh("returnData")
                        //手动返回上一个页面
                        this.props.navigation.goBack()
                    }}
                />

            </View>
        )
    }
}

//定义路由组件
const StackNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen }
}, {
        navigationOptions: { header: null }   //去掉顶部导航
    })


//渲染路由组件
export default class StackNavigatorTest extends Component {
    render() {
        return (
            <StackNavigator />
        )
    }
}