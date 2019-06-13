import React, { Component } from 'react'
import { View,Text,Image,FlatList,StyleSheet, StatusBar } from 'react-native'
import { TitleBar } from './TitleBar';


class ItemView extends Component{
    render(){
        return(
            <View style={styles.itemWrap}>
                <View style={styles.titleView}>
                    <Image style={styles.icon} source={this.props.icon}/>
                    <Text style={styles.titleTxt}>{this.props.title}</Text>
                </View>
                <Image style={styles.moreImg} source={require('./img/findPage/more.png')}/>
            </View>
        )
    }
}


export class FindScreen extends Component{
    render(){
        const iconArr = [require('./img/findPage/朋友圈.png'),require('./img/findPage/扫一扫.png'),
            require('./img/findPage/看一看.png'),require('./img/findPage/小程序.png')]
        var contentList = [
            {icon:iconArr[0],title:"朋友圈"},
            {icon:iconArr[1],title:"扫一扫"},
            {icon:iconArr[2],title:"看一看"},
            {icon:iconArr[3],title:"小程序"}
        ]
        return(
            <View style={{flex:1,backgroundColor:"#EDEDED"}}>
                <TitleBar title={"发现"}/>
                <FlatList
                    data={contentList}
                    renderItem={({item})=>{
                        return(
                            <ItemView
                                icon={item.icon}
                                title={item.title}
                            ></ItemView>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                >

                </FlatList>
            </View>
            
        )
    }
    componentDidMount(){
        this.navListener = this.props.navigation.addListener('didFocus',()=>{
            StatusBar.setBackgroundColor("#EDEDED");
        })
    }
    componentWillUnmount(){
        this.navListener.remove();
    }
}

const styles = StyleSheet.create({
    itemWrap:{
        height:60,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#D9D9D9",
        marginBottom:10,
        paddingHorizontal:10
    },
    titleView:{
        flexDirection:"row",
        alignItems:"center"

    },
    icon:{
        width:30,
        height:30,
        marginHorizontal:5
    },
    titleTxt:{
        fontSize:18,
        color:"#000",
        marginLeft:10
    },
    moreImg:{
        width:20,
        height:20
    }
});