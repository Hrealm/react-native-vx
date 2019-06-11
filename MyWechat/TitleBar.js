import React, { Component } from 'react'
import { View,Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export class TitleBar extends Component{
    static propTypes ={
        title: PropTypes.string.isRequired,
        tips: PropTypes.string
    }
    static defaultProps = {
        title:"",
        tips: ""
    }

    render(){
        return(
            <View style={styles.titlBarWrap}>
                <Text style={styles.title}>{this.props.title}{this.props.tips}</Text>
                <View style={styles.funBtn}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={styles.ImgBtn} source={require('./img/search.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={styles.ImgBtn} source={require('./img/add.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titlBarWrap:{
        flexDirection:"row",
        alignItems:"center",
        height:50,
        backgroundColor:"#EDEDED",
        justifyContent:"space-between",
        paddingHorizontal:15
    },
    title:{
        fontSize:18,
        color:"#000"
    },
    funBtn:{
        flexDirection:"row",
        alignItems:"center"
    },
    ImgBtn:{
        width:25,
        height:25,
        marginHorizontal:10
    }
});