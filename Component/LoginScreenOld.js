import React, { Component } from 'react'  //imrc
import { Alert,StyleSheet,Text,View,TextInput,Image,ImageBackground,TouchableOpacity,ToastAndroid,StatusBar } from 'react-native'  //imrn

const background = require("./img/bg.png")
const mark = require("./img/mark.png")
const person = require("./img/person.png")
const lock = require("./img/lock.png")

export class LoginScreen extends Component{

    //初始化state
    constructor(props){
        super(props);
        this.state={
            textPass:""
        }
    }

    render(){
        var inputText = ""
        return(
            <View style={styles.container}>
                 {/* //隐藏状态栏 */}
                 <StatusBar
                    hidden={false}
                    
                />
                <ImageBackground 
                    source={background}
                    style={styles.background}>

                    <Image style={styles.mark} source={mark}/>

                    <View style={styles.inputWrap}>
                        <Image style={styles.inputImage} source={person}/>
                        <TextInput style={styles.input} placeholder="账号" placeholderTextColor="#ccc" 
                                    onChangeText={(text)=>{inputText=text}}></TextInput>
                    </View>
                    <View style={styles.inputWrap}>
                        <Image style={styles.inputImage} source={lock}/>
                        <TextInput style={styles.input} placeholder="密码" placeholderTextColor="#ccc" secureTextEntry
                                    onChangeText={(text)=>{this.setState({textPass:text})}}></TextInput>
                    </View>
                    <Text style={styles.textForgetPass}>
                        <Text>忘记密码</Text>
                        <Text>{this.state.textPass}</Text>
                    </Text>
                    <TouchableOpacity activeOpacity={0.8} 
                                        onPress={()=>{
                                            // ToastAndroid.show(inputText,ToastAndroid.SHORT)
                                            this.props.navigation.navigate("Main")
                                        }}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>登 录</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.exitText}>退出</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        flex:1
    },
    mark:{
        width:130,
        height:130,
        marginVertical:30,
        alignSelf:"center"
    },
    inputWrap:{
        height:40,
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"#ccc",
        marginTop:10
    },
    inputImage:{
        width:20,
        height:20,
        marginTop:7,
        marginLeft:7
    },
    input:{
        flex:1,
        paddingHorizontal:10
    },
    textForgetPass:{
        color:"#ccc",
        alignSelf:"flex-end",
        margin:10
    },
    button:{
        height:50,
        backgroundColor:"#e16",
        marginTop:30,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        color:"#fff",
        fontSize:18
    },
    exitText:{
        color:"#fff",
        alignSelf:"center",
        marginTop:170
    }
})