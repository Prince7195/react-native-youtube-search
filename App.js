import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import { SearchBar, AppHeader, VideoList } from './components';

const API_KEY = 'AIzaSyCIywKBhuUmp9YPM9Wb2JCYyCOQeStsvOY';

export default class App extends Component {

  state = {
    loading: false,
    videos: []
  };

  componentWillMount() {
    this.searchYT('Academind');
  }

  onPressSearch = term => {
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      // console.log(videos);
      this.setState({ loading: false, videos });
    });
  }

  render() {   
    const { loading, videos } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader />
        <SearchBar
          loading={loading}
          onPressSearch={this.onPressSearch}
        />
        <VideoList 
          videos={videos}
        />
      </View>
    );
  }
}
