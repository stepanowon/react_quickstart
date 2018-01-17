import React, { Component } from 'react';
import { Text, StyleSheet, ListView } from 'react-native';

class ListViewBasics extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({
            rowHasChanged : (r1, r2)=> r1 != r2
        });
        this.state = {
            dataSource : ds.cloneWithRows(['obama', 'sanders', 'trumph', 'hillary', 'romney'])
        };
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                renderRow= {
                    (rowData)=> <Text>{rowData}</Text>
                }
            />
        );
    }
}

export default ListViewBasics;