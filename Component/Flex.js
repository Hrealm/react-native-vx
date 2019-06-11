import React, { Component } from 'react';
import { View,Text } from 'react-native';


//flexShrink  定义了元素在空间不够时如何压缩自身
 class FlexShrinkComponent extends Component{
    render(){
        return(
            <View style={{flexDirection:"row"}}>
                <Text style={{backgroundColor:"#00f",flexShrink:1}}>Flex Item Flex ItemFlex Item</Text>
                <Text style={{backgroundColor:"#0f0"}}>Flex Item</Text>
                <Text style={{backgroundColor:"#f00"}}>Flex Item</Text>
            </View>
        )
    }
}


// flexGrow:定义元素如何占用剩余空间
export default class FlexGrowComponent extends Component{
    render(){
        return(
            <View style={{flexDirection:"row"}}>
                <Text style={{backgroundColor:"#f00"}}>Flex Item</Text>
                <Text style={{backgroundColor:"#0f0",flexGrow:1}}>Flex Item</Text>
                <Text style={{backgroundColor:"#ff0",flexGrow:1}}>Flex Item</Text>
                <Text style={{backgroundColor:"#000",flexGrow:1}}>Flex Item</Text>
            </View>
        )
    }
}

// flexWrap:是否换行
 class FlexWrapComponent extends Component{
    render(){
        return(
            <View style={{flexDirection:"row",flexWrap:"wrap-reverse"}}>
                <View style={{width:100,height:50,backgroundColor:"00f"}}></View>
                <View style={{width:100,height:50,backgroundColor:"0f0"}}></View>
                <View style={{width:100,height:50,backgroundColor:"f00"}}></View>
                <View style={{width:100,height:50,backgroundColor:"0ff"}}></View>
                <View style={{width:100,height:50,backgroundColor:"f0f"}}></View>
            </View>
        )
    }
}



// alignSelf:目标元素在交叉轴上的排列方式，修饰的是目标元素
 class AlignSelfComponent extends Component{
    render(){
        return(
            <View style={{height:100,backgroundColor:"#aaa",flexDirection:"row"}}>
                <View style={{width:100,height:50,backgroundColor:"#00f"}}></View>
                <View style={{width:100,height:25,backgroundColor:"#0f0"}}></View>
                <View style={{width:100,height:50,backgroundColor:"#ff0",alignSelf:"center"}}></View>
            </View>
        )
    }
}



// alignContent:每一行的排列方式，需要设置flexWrap:"wrap"
 class AlignContent extends Component{
    render(){
        return(
            <View style={{height:100,backgroundColor:"#aaa",flexDirection:"row",flexWrap:"wrap",alignContent:"stretch"}}>
                <View style={{width:100,height:50,backgroundColor:"#00f"}}></View>
                <View style={{width:100,height:25,backgroundColor:"#0f0"}}></View>
                <View style={{width:100,height:50,backgroundColor:"#ff0"}}></View>
                <View style={{width:100,height:25,backgroundColor:"#0ff"}}></View>
                <View style={{width:100,height:25,backgroundColor:"#f00"}}></View>
            </View>
        )
    }
}



// justifyContent: 子容器在主轴上的对齐方式，
// flex-start:(默认)，与主轴起始位置对齐，flex-end，center,space-between,space-around

// alignItems:子容器在交叉轴上的排列方式，flex-start(默认)；
// flex-end,center,stretch(拉伸覆盖交叉轴);baseline(基线对齐)

// flexDirection:主轴方向，默认column
// row,row-reverse,column,column-reverse



// flex:弹性宽高 按比例等分剩余空间
// 若设置跟标签flex:1，父容器高度占满整个屏幕高度
 class FlexComponent extends Component{
    render(){
        return(
            <View style={{flexDirection:"row",flex:1}}>
                <View style={{width:50,height:50,backgroundColor:"#00f"}}></View>
                <View style={{flex:1,height:50,backgroundColor:"#f00"}}></View>
                <View style={{flex:2,height:50,backgroundColor:"#0ff"}}></View>
                <View style={{width:50,height:50,backgroundColor:"#0f0"}}></View>
                <View style={{flex:2,height:50,backgroundColor:"#f0f"}}></View>
            </View>
        )
    }
}




/* flexDirection 主轴的方向 */
 class FlexDirectionComponent extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:"row-reverse"}}>
                <View style={{flex:1,backgroundColor:"#00f"}}></View>
                <View style={{width:50,backgroundColor:"#0f0"}}></View>
                <View style={{flex:1,backgroundColor:"#f00"}}></View>
                <View style={{flex:1,backgroundColor:"#0ff"}}></View>
                <View style={{width:50,backgroundColor:"#f0f"}}></View>
            </View>
        )
    }
}


/* alignItems 交叉轴上的排列方式 */
 class alignItemsComponent extends Component{
    render(){
        return(
            <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"}}>
                <View style={{width:50,height:50,backgroundColor:"#00f"}}></View>
                <View style={{width:50,height:100,backgroundColor:"#0f0"}}></View>
                <View style={{width:50,height:50,backgroundColor:"#f00"}}></View>
            </View>
        )
    }
}


/* justifyContent  主轴上的对齐方式 */
 class justifyContentComponent extends Component{
    render(){
        return(
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{width:50,backgroundColor:"#00f"}}></View>
                <View style={{width:50,height:100,backgroundColor:"#0f0"}}></View>
                <View style={{width:50,backgroundColor:"#f00"}}></View>
            </View>
             
        )
    }
}