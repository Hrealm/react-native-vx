import React, { Component } from 'react'
import { View, Text, ImageBackground, StatusBar } from 'react-native'

import { TabNavigatorRoute } from './ContactsScreen'

export class MainScreen extends Component {
    render() {
        return (
            <TabNavigatorRoute />
        )
    }
}
