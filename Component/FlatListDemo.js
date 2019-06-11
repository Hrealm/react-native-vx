import React, { Component } from 'react'
import { StyleSheet,View,Text,Image,FlatList } from 'react-native'

const styles = StyleSheet.create({
    root:{
        flexDirection:"row",
        height:81,
        alignItems:"center"
    },
    ImageTitle:{
        width:24,
        height:24,
        alignSelf:"center",
        marginLeft:15
    },
    content:{
        height:80,
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:15,
        borderBottomWidth:1,
        borderBottomColor:"#ccc"
    },
    site:{
        // justifyContent:"flex-start"
        flex:3
    },
    siteText:{
        fontSize:18,
        color:"#000",
        marginBottom:5
    },
    descText:{
        fontSize:16,
        color:"#fff",
        backgroundColor:"#A8D817",
        padding:2,
        width:53,
        // width:"normal",
        // textAlign:"center",
        borderRadius:5
    },
    descText2:{
        fontSize:16,
        color:"#808080",
        padding:2,
    },
    path:{
        flex:1,
        marginRight:15,
        alignItems:"center"
    },
    ImagePath:{
        width:32,
        height:32,
        marginBottom:2
    },
    pathText:{
        color:"#808080",
        fontSize:14
    }
});

const siteList = [
    {siteImage:require('./定位.png'),siteName:'中国建设银行ATM(兴华商场)',descName:'广东省-佛山市-禅城区-祖庙路42号之15156...',descNameStyle:styles.descText2,sitePath:require('./路线.png'),descPath:'路线'},
    {siteImage:require('./定位.png'),siteName:'奥园广场',descName:'广东省-广州市-番禺区-福德路281号',descNameStyle:styles.descText2,sitePath:require('./路线.png'),descPath:'路线'},
    {siteImage:require('./地铁.png'),siteName:'祖庙(地铁站)',descName:'广佛线',descNameStyle:styles.descText,sitePath:require('./路线.png'),descPath:'路线'},
    {siteImage:require('./定位.png'),siteName:'狮山镇大学城社区卫生服务站',descName:'信息大道南附近',descNameStyle:styles.descText2,sitePath:require('./路线.png'),descPath:'路线'},
    {siteImage:require('./定位.png'),siteName:'广东东软学院-体育馆',descName:'狮山镇南海区软件科技园广云路',descNameStyle:styles.descText2,sitePath:require('./路线.png'),descPath:'路线'}
];
export default class FlatListDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false, //初始化状态，此时加载状态为不加载
            dataArray: siteList  //初始化数据
        }
    }

    //自定义渲染组件
    _reanderItem = (data) =>{
        return <View style={styles.root}>
                    <Image style={styles.ImageTitle} source={data.item.siteImage}/>
                    <View style={styles.content}>
                        <View style={styles.site}>
                            <Text style={styles.siteText}>{data.item.siteName}</Text>
                            <Text style={data.item.descNameStyle}  numberOfLines={1}>{data.item.descName}</Text>
                        </View>
                        <View style={styles.path}>
                            <Image style={styles.ImagePath} source={data.item.sitePath}/>
                            <Text style={styles.pathText}>{data.item.descPath}</Text>
                        </View>
                    </View>
                </View>
    }

    render(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    data = {this.state.dataArray}
                    // 将list中的renderRow中的内容抽出来单独放成一个组件渲染
                    renderItem = {(data) => this._reanderItem(data)}
                    // //为给定的item生成一个不重复的key
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}



