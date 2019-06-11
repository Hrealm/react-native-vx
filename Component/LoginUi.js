import React, { Component } from 'react';
import { StyleSheet,View,Text,Image,TextInput,ImageBackground,TouchableOpacity } from 'react-native';

export default class LoginUi extends Component{
    render(){
        return(

            <View style={styles.rootView}>
                <ImageBackground style={styles.rootBg} 
                    source={require("./bg.jpg")}>
                    <View style={styles.rootView}>
                        {/* 头像 */}
                        <View style={styles.imageView}><Image style={styles.imagern} source={require("./realm.jpg")}/></View>
                        <View style={{marginTop:40}}>
                             {/* 账号 */}
                            <View style={styles.InfoView}>
                                <TextInput style={styles.txtIn} placeholder="账号" placeholderTextColor="#ddd"/>
                            </View>
                            {/* 密码 */}
                            <View style={styles.InfoView}>
                                <TextInput secureTextEntry={true} style={styles.txtIn} placeholder="密码" placeholderTextColor="#ddd"/>
                            </View>
                        </View>
                        {/* 忘记密码 */}
                        <View style={styles.forgotPd}><Text style={styles.fontPd}>忘记密码？</Text></View>
                        {/* btn */}
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.loginBtn}><Text style={styles.loginTxt}>登录</Text></View>
                        </TouchableOpacity>
                        {/* desc注册 */}
                        <View style={styles.singUpView}>
                            <Text style={styles.singUpTxt}>
                                <Text style={styles.singUpTip}>没有账号？</Text><Text>注册</Text>
                            </Text>
                        </View>
                    </View>
                 </ImageBackground>
            </View>
            
        )
    }
}


const styles = StyleSheet.create({
    rootView:{
        flex:1,
        flexDirection:"column"
    },
    rootBg:{
        flex:1
    },
    imageView:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:50
    },
    imagern:{
        width:140,
        height:140,
        borderRadius:70
    },
    InfoView:{
        flexDirection:"column",
        color:"#00f"
    },
    txtIn:{
        marginVertical:10,
        paddingHorizontal:40,
        height:50,
        fontSize:18,
        borderBottomWidth:1,
        borderBottomColor:"#ccc",
    },
    forgotPd:{
        flexDirection:"row",
        marginRight:10,
        marginTop:8,
        marginBottom:25,
        alignSelf:"flex-end"
    },
    fontPd:{
        color:"#ddd",
        fontSize:18
    },
    loginBtn:{
        flexDirection:"row",
        height:65,
        backgroundColor:"rgb(255,51,102)",
        justifyContent:"center",
        alignItems:"center"
    },
    loginTxt:{
        color:"#fff",
        fontSize:18
    },
    singUpView:{
        flexDirection:"row",
        marginTop:80,
        justifyContent:"center",
        alignItems:"center",
        height:50
    },
    singUpTxt:{
        fontSize:15,
        color:"#fff"
    },
    singUpTip:{
        color:"#ddd"
    },
    singUp:{
        color:"#fff"
    }
})