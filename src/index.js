import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = '';

// Create a new component. This component should produce some HTML
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};

    this.__searchYTVideos('snowboarding');
  }

  __searchYTVideos(term) {
    YTSearch({key: API_KEY, term: term}, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    const searchVideo = _.debounce((term) => this.__searchYTVideos(term), 300);
    // var self = this;
    // const searchVideo = _.debounce(function(term) {
    //   self.__searchYTVideos(term);
    // }, 300);

    return (
      <div>
        <SearchBar onSearch={searchVideo} />
        <VideoDetail selectedVideo={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos} 
          onSelect={(video) => this.setState({selectedVideo: video})}/>
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
// should be the instance of the component, not the component class itself, which means
// should put <App></App> as the param
ReactDOM.render(<App />, document.querySelector('.container'));
