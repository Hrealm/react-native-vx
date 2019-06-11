import React, { Component } from 'react';
import { Alert,StyleSheet,View,Text,Image,TextInput,TouchableHighlight,TouchableNativeFeedback,TouchableOpacity } from 'react-native';

export default class BaseComponent extends Component{
    render(){
        return(
            <View style={styles.rootView}>
                <View style={styles.viewContainer}>
                    <View style={styles.viewOne}></View>
                    <View style={styles.viewTwo}></View>
                </View>
                {/* 加载本地图片 */}
                <Image style={styles.imagern} source={require("./realm.jpg")}/>
                {/* 加载网络图片 */}
                <Image style={styles.imagern} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"}}/>
                {/* View 中嵌套text，换行显示 */}
                <Text style={styles.textBlue}>自定义文本样式1</Text>
                <Text style={styles.textBlue}>自定义文本样式2</Text>
                {/* 一行显示 */}
                <Text style={styles.textBlue}>
                    <Text>嵌套Text1</Text>
                    {/* Text中嵌套Text，不会换行显示，除非显示不下 */}
                    <Text>嵌套Text2</Text>
                </Text>
                <TextInput style={styles.inputWrap} placeholder="账号" placeholderTextColor="#ddd"/>

                <TouchableHighlight
                    underlayColor="white"
                    onPress={()=>{Alert.alert("你点击了TouchableHighlight")}}
                    onLongPress={()=>{Alert.alert("你长按了TouchableHighlight")}}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>

                <TouchableNativeFeedback>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableOpacity activeOpacity={0.6}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rootView:{
        flex:1
    },
    viewContainer:{
        flexDirection:"row",
        height:100,
        marginTop:10
    },
    viewOne:{
        backgroundColor:"#00f",
        flex:0.4
    },
    viewTwo:{
        backgroundColor:"#0f0",
        flex:0.6
    },
    imagern:{
        width:190,
        height:110
    },
    textBlue:{
        backgroundColor:"#fff",
        textDecorationLine:"underline",
        color:"#00f",
        fontSize:20,
        textAlign:"center"
    },
    inputWrap:{
        marginVertical:10,
        paddingHorizontal:10,
        height:40,
        borderBottomWidth:1,
        borderBottomColor:"#ccc"
    },
    button:{
        height:50,
        backgroundColor:"#00f",
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        color:"#fff"
    }
})