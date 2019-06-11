import React, { Component } from 'react'
import { StyleSheet, View, Text, WebView, ScrollView, FlatList, SectionList } from 'react-native'

class WebViewComponent extends Component {
    render() {
        return (
            <WebView source={{ uri: "http://www.baidu.com" }} />

        )
    }
}

class ScrollViewComponent extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 80 }}>ScrollView</Text>
                <Text style={{ fontSize: 80 }}>ScrollView</Text>
                <Text style={{ fontSize: 80 }}>ScrollView</Text>
                <Text style={{ fontSize: 80 }}>ScrollView</Text>
                <Text style={{ fontSize: 80 }}>ScrollView</Text>
                <Text style={{ fontSize: 80 }}>ScrollView</Text>
                <Text style={{ fontSize: 80 }}>ScrollView</Text>
                <Text style={{ fontSize: 80 }}>ScrollView</Text>
            </ScrollView>
        )
    }
}

class FlatListComponent extends Component {
    render() {
        return (
            <FlatList
                data={[
                    { key: "aaa" },
                    { key: "bbb" },
                    { key: "ccc" },
                    { key: "ddd" },
                    { key: "eee" }
                ]}

                renderItem={({ item }) => { return <Text style={{ color: "red", fontSize: 50 }}>{item.key}</Text> }}
            />

        )
    }
}


class ItemView extends Component {
    render() {
        return (
            // <Text style={{ color: this.props.isGZ ? "red" : "green", fontSize: this.props.isGZ ? 25 : 20, marginTop: 20 }}>
            //     {this.props.text}
            // </Text>
            <Text style={this.props.isGZ ? styles.colorRed : styles.colorGreen}>
                {this.props.text}
            </Text>
        )
    }
}
 class FlatListText extends Component {
    render() {
        var subwayData = new Array()
        var data1 = { key: "广州地铁-嘉禾望岗", isGZ: true }
        var data2 = { key: "佛山地铁-桂城", isGZ: false }
        var data3 = { key: "广州地铁-三元里", isGZ: true }
        var data4 = { key: "佛山地铁-祖庙", isGZ: false }
        // var data5 =  {key:"广州地铁-体育西路",isGZ:true}
        // var data6 =  {key:"佛山地铁-千灯湖",isGZ:false}
        // var data7 =  {key:"广州地铁-客村",isGZ:true}
        // var data8 =  {key:"佛山地铁-同济路",isGZ:false}
        // var data9 =  {key:"广州地铁-广州南站",isGZ:true}
        for (i = 0; i < 5; i++) {
            subwayData.push(data1)
            subwayData.push(data2)
            subwayData.push(data3)
            subwayData.push(data4)
        }

        return (
            <FlatList
                data={subwayData}

                renderItem={({ item }) => { return <ItemView text={item.key} isGZ={item.isGZ}></ItemView> }}
            />

        )
    }
}

const styles = StyleSheet.create({
    colorRed: {
        color: "red",
        fontSize:25
    },
    colorGreen: {
        color: "green",
        fontSize:20
    }
});

class SectionListComponent extends Component {
    render() {
        return (
            <SectionList
                sections={[
                    { title: "A", data: ["阿三", "阿四"] },
                    { title: "B", data: ["宝贝儿", "包贝尔"] },
                    { title: "C", data: ["ccc", "cat","1231"] }
                ]}

                renderSectionHeader={({ section }) => { return <Text style={{ fontSize: 40 }}>{section.title}</Text> }}
                renderItem={({ item }) => { return <Text>{item}</Text> }}

                //为给定的item生成一个不重复的key
                keyExtractor={(item, index) => index}
            >
            </SectionList>
        )
    }
}


export default  class SectionListComponent extends Component {
    render() {
        return (
            <SectionList
                sections={[
                    { title: "A", data: [{img:"img",name:"name1"}, {img:"img",name:"name2"}] },
                    { title: "B", data: [{img:"img",name:"name1"}, {img:"img",name:"name2"}] },
                    // { title: "C", data: ["ccc", "cat","1231"] }
                ]}

                renderSectionHeader={({ section }) => { return <Text style={{ fontSize: 40 }}>{section.title}</Text> }}
                renderItem={({ item , section }) => { return <Text>{item.img}</Text> }}

                //为给定的item生成一个不重复的key
                keyExtractor={(item, index) => index}
            >
            </SectionList>
        )
    }
}