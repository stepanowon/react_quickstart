import React, { Component } from 'react';
import { ListView, View, Text, TouchableHighlight } from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows(this.props.items)
        };
    }

    updateDataSource(items) {
        this.setState({
            dataSource: ds.cloneWithRows(items)
        });
    }

    componentWillReceiveProps(newProps) {
        this.updateDataSource(newProps.items);
    }

    renderRow(item, sectionId, rowId) {
        console.log("### renderRow : ");
        console.log(this.props.remove);
        return (
        <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width:200 }}>
                <Text style={{ fontSize:20 }}>{item}</Text>
            </View>
            <TouchableHighlight style={{ width:100 }}
                onPress={this.props.remove.bind(this, rowId)}
                activeOpacity={75 / 100}>
                <Text style={{ fontSize:20 }}>삭제</Text>
            </TouchableHighlight>
        </View>
        );
    }

    render() {
        console.log("### render : ");
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                    automaticallyAdjustContentInsets={false}
                />
            </View>
        );
    }
}

export default List;