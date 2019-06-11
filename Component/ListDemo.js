import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default class ListDemo extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.root}>
                    <Image style={styles.ImageTitle} source={require("./地铁.png")} />
                    <View style={styles.content}>
                        <View style={styles.site}>
                            <Text style={styles.siteText}>祖庙(地铁站)</Text>
                            <Text style={styles.descText}>广佛线</Text>
                        </View>
                        <View style={styles.path}>
                            <Image style={styles.ImagePath} source={require("./路线.png")} />
                            <Text style={styles.pathText}>路线</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.root}>
                    <Image style={styles.ImageTitle} source={require("./地铁.png")} />
                    <View style={styles.content}>
                        <View style={styles.site}>
                            <Text style={styles.siteText}>祖庙(地铁站)</Text>
                            <Text style={styles.descText}>广佛线</Text>
                        </View>
                        <View style={styles.path}>
                            <Image style={styles.ImagePath} source={require("./路线.png")} />
                            <Text style={styles.pathText}>路线</Text>
                        </View>
                    </View>
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        height: 81,
        alignItems: "center"
    },
    ImageTitle: {
        width: 24,
        height: 24,
        alignSelf: "center",
        marginLeft: 15
    },
    content: {
        height: 80,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    siteText: {
        fontSize: 18,
        color: "#000",
        marginBottom: 5
    },
    descText: {
        fontSize: 16,
        color: "#fff",
        backgroundColor: "#A8D817",
        padding: 2,
        alignSelf: "flex-start",
        // width:53,
        borderRadius: 5
    },
    path: {
        marginRight: 15,
        alignItems: "center"
    },
    ImagePath: {
        width: 32,
        height: 32,
        marginBottom: 2
    },
    pathText: {
        color: "#808080",
        fontSize: 14
    }
});