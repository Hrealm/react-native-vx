import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'

const siteImage = [require('./定位.png'), require('./地铁.png'), require('./搜索.png'), require("./路线.png")]

class ItemView extends Component {
    render() {
        return (
            <View style={this.props.isSeek ? styles.seekRoot : styles.root}>
                <Image style={styles.ImageTitle} source={this.props.isSeek ? siteImage[2] : this.props.isSubway ? siteImage[1] : siteImage[0]} />
                <View style={this.props.isSeek ? styles.seekContent : styles.content}>
                    <View style={styles.site}>
                        <Text style={styles.siteText}>{this.props.siteName}</Text>
                        <Text style={this.props.isSeek ? { display: "none" } : this.props.isSubway ? styles.subwayDescText : styles.siteDescText} numberOfLines={1}>{this.props.descName}</Text>
                    </View>
                    <View style={this.props.isSeek ? { display: "none" } : styles.path}>
                        <Image style={styles.ImagePath} source={siteImage[3]} />
                        <Text style={styles.pathText}>{this.props.descPath}</Text>
                    </View>
                </View>
            </View>
        )
    }
}



export default class FlatListDemo extends Component {
    render() {

        var siteList = [
            { siteName: '格雷斯精选酒店(杭州西溪店)洗衣房', descName: '荆山领路2号汇峰国际B座4楼', descPath: '路线', isSubway: false, isSeek: false },
            { siteName: '诺诚酒店(杭州乐园湘湖地铁站店)', descName: '浙江省杭州市萧山区湘湖路767号', descPath: '路线', isSubway: false, isSeek: false },
            { siteName: '奥园广场', descName: '广东省-广州市-番禺区-福德路281号', descPath: '路线', isSubway: false, isSeek: false },
            { siteName: '祖庙(地铁站)', descName: '广佛线', descPath: '路线', isSubway: true, isSeek: false },
            { siteName: '杭州那边客栈', descName: '浙江省-杭州市-西湖区-白乐桥135号', descPath: '路线', isSubway: false, isSeek: false },
            { siteName: '三支民宿(西湖苏堤店)', descName: '浙江省-杭州市-西湖区-三台山路赤山苑29号...', descPath: '路线', isSubway: false, isSeek: false },
            { siteName: '度假村', isSubway: false, isSeek: true },
            { siteName: '富春山居', isSubway: false, isSeek: true },
            { siteName: '富春山居图', isSubway: false, isSeek: true },
            { siteName: '杭州', isSubway: false, isSeek: true },
            { siteName: '天目山', isSubway: false, isSeek: true }
        ]


        return (
            <FlatList
                data={siteList}
                renderItem={({ item }) => {
                    return <ItemView
                        siteName={item.siteName}
                        descName={item.descName}
                        descPath={item.descPath}
                        isSubway={item.isSubway}
                        isSeek={item.isSeek}>
                    </ItemView>
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}


const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        height: 81,
        alignItems: "center"
    },
    seekRoot: {
        flexDirection: "row",
        height: 61,
        alignItems: "center"
    },
    ImageTitle: {
        width: 24,
        height: 24,
        alignSelf: "center",
        marginLeft: 15
    },
    content: {
        height: 80,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    seekContent: {
        height: 60,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    site: {
        flex: 8
    },
    siteText: {
        fontSize: 18,
        color: "#000"
    },
    subwayDescText: {
        fontSize: 16,
        color: "#fff",
        backgroundColor: "#A8D817",
        paddingHorizontal: 5,
        paddingVertical: 1,
        alignSelf: "flex-start",
        borderRadius: 3,
        marginTop: 5
    },
    siteDescText: {
        fontSize: 16,
        color: "#808080",
        padding: 2,
        marginTop: 5
    },
    path: {
        flex: 1,
        marginRight: 15,
        alignItems: "center"
    },
    ImagePath: {
        width: 32,
        height: 32,
        marginBottom: 2
    },
    pathText: {
        color: "#808080",
        fontSize: 14
    }
});