import React, { Component } from 'react'
import { View, Text, ImageBackground, StatusBar, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
// import { createStackNavigator, createBottomTabNavigator } from "react-navigation"

// itemView
class ItemView extends Component {
    render() {
        return (
            <View style={styles.itemWrap}>
                <Image style={styles.imgHead} source={this.props.userHead} />
                <View style={styles.itemContent}>
                    <View>
                        <Text style={styles.name}>{this.props.name}</Text>
                        <Text style={styles.messages}>{this.props.messages}</Text>
                    </View>
                    <Text >{this.props.time}</Text>
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
        var imgArr = [require('./img/userHead/文件传输.jpg'), require('./img/userHead/文件传输.jpg'), require('./img/userHead/魔力伞.jpg'), require('./img/userHead/realm.jpg'), require('./img/userHead/微信支付.jpg'), require('./img/userHead/广州地跌.jpg'), require('./img/userHead/微信运动.jpg')]
        var nameArr = ["文件传输助手", "文件传输助手2", "文件传输助手3", "文件传输助手4", "文件传输助手5", "文件传输助手6", "文件传输助手7"]
        var timeArr = ["14:30", "15:00", "13:02", "昨天", "14:31", "12:01", "00:00"]

        for (i = 0; i < nameArr.length; i++) {
            var item = { id: i, userHead: imgArr[i], name: nameArr[i], messages: this.state.msgArr[i], time: timeArr[i] }
            dataArr.push(item)
        }


        return (
            <View style={{ paddingBottom: 50 }}>
                <View style={styles.titlBarWrap}>
                    <Text style={styles.title}>微信（2）</Text>
                    <View style={styles.funBtn}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image style={styles.ImgBtn} source={require('./img/search.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image style={styles.ImgBtn} source={require('./img/add.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={dataArr}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity activeOpacity={1}
                                onPress={() => {
                                    this.props.navigation.navigate("Chat", {
                                        id: item.id,
                                        name: item.name,
                                        userHead: item.userHead,
                                        refresh: (id, messages) => {
                                            var newMsgArr = this.state.msgArr;
                                            newMsgArr[id] = messages;
                                            this.setState({ msgArr: newMsgArr })
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


                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        )
    }

    componentDidMount() {
        var defaultMsgArr = ["[1111]", "14717", "aaaa", "gggg", "bbbb", "[ccc]ccc", "[dddd]"]
        this.setState({ msgArr: defaultMsgArr })
    }
}

const styles = StyleSheet.create({
    itemWrap: {
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingLeft: 15,
        // paddingVertical:15
    },
    imgHead: {
        width: 60,
        height: 60,
        borderRadius: 5
    },
    itemContent: {
        flex: 1,
        height: 80,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#D9D9D9",
        marginLeft: 15,
        paddingRight: 15,
        paddingVertical: 10
    },
    userInfo: {
        flexDirection: "column"
    },
    name: {
        fontSize: 18,
        color: "#000"
    },
    messages: {
        fontSize: 16,
        color: "#9B9B9B",
        marginTop: 7
    },
    time: {
        fontSize: 16,
        color: "#B2B2B2"
    },
    titlBarWrap: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        backgroundColor: "#EDEDED",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    title: {
        fontSize: 18,
        color: "#000"
    },
    funBtn: {
        flexDirection: "row",
        alignItems: "center"
    },
    ImgBtn: {
        width: 25,
        height: 25,
        marginHorizontal: 10
    }
});
