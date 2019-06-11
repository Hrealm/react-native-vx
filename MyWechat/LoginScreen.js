import React, { Component } from 'react'
import { View,Image,Text,TextInput,TouchableOpacity,StyleSheet, AsyncStorage, ToastAndroid, StatusBar } from 'react-native'


export class LoginScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            pass:"",
            isShow: false,
        }
    }

    render(){
        return(
            <View style={styles.container}>
                {/* //隐藏状态栏 */}
                <StatusBar  animated={true} hidden={false} backgroundColor="#EDEDED" barStyle="dark-content"/>
                <Image style={styles.headImage} source={require("./img/userHead/realm.jpg")}/>
                <Text style={styles.userPhone}>+86 150 8961 9097</Text>
                <View style={styles.inputWrap}>
                    <Text style={styles.passwordTxt}>密码</Text>
                    <TextInput ref="refInput" style={styles.passwordInput} placeholder="请填写微信密码" placeholderTextColor="#BCBCBC" secureTextEntry 
                        value={this.state.pass}
                        onChangeText={(text)=>{this.setState(text.length >=1 ? {isShow:true}:{isShow:false}),this.setState({pass:text})}}></TextInput>
                    <TouchableOpacity style={this.state.isShow ? {display:"flex"} : {display:"none"}} activeOpacity={1} 
                        onPress={()=>{this.refs.refInput.clear(); this.setState({isShow:false,pass:""})}}>
                        <Image style={styles.clearText} source={require("./img/clearText.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.otherLogin}>用短信验证码登录</Text>
                <View style={{marginTop:45}}>
                    <TouchableOpacity style={this.state.isShow ? {display:"flex"} : {display:"none"}} activeOpacity={0.9}
                        onPress={()=>{
                                this.writeUserData(this.state.pass);
                                this.props.navigation.navigate("Main")
                            }}>
                        <View style={styles.showLoginBtn}>
                            <Text style={styles.loginBtnText}>登录</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={this.state.isShow ? {display:"none"} : styles.unLoginBtn}>
                        <Text style={styles.loginBtnText}>登录</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footerContent}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={styles.footerText}>找回密码</Text>
                        </TouchableOpacity>
                        <Text>|</Text>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={styles.footerText}>紧急冻结</Text>
                        </TouchableOpacity>
                        <Text>|</Text>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={styles.footerText}>更多选项</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    //组件生命周期方法，组件加载完后会回调
    componentDidMount(){
        this.readUserData()
    }
    //读取数据
    readUserData = async()=>{
        var pass = await AsyncStorage.getItem("key_pass");
        //第一次打开 pass 为undefined，所以设置不可点击登录
        this.setState(pass == undefined ? {isShow:false} : {pass:pass,isShow:true})
    }
    //存储数据
    writeUserData = async(pass)=>{
        await AsyncStorage.setItem("key_pass",pass)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#EDEDED",
        flexDirection:"column",
        paddingHorizontal:18
    },
    headImage:{
        width:75,
        height:75,
        borderRadius:5,
        marginTop:120,
        alignSelf:"center"
    },
    userPhone:{
        color:"#000",
        fontSize:20,
        marginTop:10,
        alignSelf:"center"
    },
    inputWrap:{
        height:38,
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"#C9C9C9",
        marginTop:35,
        alignItems:"center"
    },
    passwordTxt:{
        color:"#000",
        fontSize:18,
    },
    passwordInput:{
        flex:1,
        paddingVertical:0,
        paddingLeft:70,
        paddingRight:20,
        fontSize:18,
    },
    clearText:{
        width:25,
        height:25
    },
    otherLogin:{
        marginTop:15,
        fontSize:18,
        color:"#5B6A91",
        alignSelf:"flex-start"
    },
    showLoginBtn:{
        height:48,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        backgroundColor:"#57BE6A"
    },
    unLoginBtn:{
        height:48,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        backgroundColor:"#ACE4C2"
    },
    loginBtnText:{
        fontSize:18,
        color:"#fff"
    },
    footer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        marginBottom:15
    },
    footerContent:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    footerText:{
        fontSize:17,
        color:"#5B6A91",
        marginHorizontal:15
    }
})
