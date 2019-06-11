import React, { Component } from 'react'
import { View,Text,Image, StyleSheet } from 'react-native'

export class MeScreen extends Component{
    render(){
        return(
            <View  style={{flex:1,backgroundColor:"#EDEDED"}}>
                {/* header */}
                <View>
                    <View>
                        <Image/>
                    </View>
                    <View>
                        <Image/>
                        <View>
                            <Text>Hrealm</Text>
                            <View>
                                <Text>微信号：Hrealm-wxid</Text>
                                <View>
                                    <Image/>
                                    <Image/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* content */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})