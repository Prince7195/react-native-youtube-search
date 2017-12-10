import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class SearchBar extends Component {
    state = {
        term: ''
    };
    render() {
        const { containerStyle, searchTextStyle, buttonStyle } = styles;
        return (
            <View style={containerStyle}>
                <TextInput
                    style={searchTextStyle}
                    value={this.state.term}
                    onChangeText={term => this.setState({ term })}
                />
                <Button
                    buttonStyle={buttonStyle}
                    disabled={this.props.loading}
                    title={this.props.loading ? 'Loading...' : 'Search'}
                    onPress={() => this.props.onPressSearch(this.state.term)}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 10,
        marginRight: 10
    },
    searchTextStyle: {
        flex: 1
    },
    buttonStyle: {
        height: 30,
        marginBottom: 10
    }
};


export default SearchBar;
