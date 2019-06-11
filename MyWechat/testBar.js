import React, { Component } from 'react'
import { View,Text } from 'react-native'
import {TitleBar} from './TitleBar'

export default class Test extends Component{
    render(){
        return(
            <View>
                <TitleBar title={"123"}/>
                <Text>15236</Text>
            </View>
        )
    }
}