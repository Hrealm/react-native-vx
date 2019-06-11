import React, { Component } from 'react'
import { View, Text, ImageBackground, StatusBar } from 'react-native'
// import { createStackNavigator, createBottomTabNavigator } from "react-navigation"

import { TabNavigatorRoute } from './ContactsScreen'

export class MainScreen extends Component {
    render() {
        return (
            <TabNavigatorRoute />
        )
    }
}
