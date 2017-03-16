import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyC0VwxSHya26_rWFmVOXUDUO95ygbr70Zw';

// Create a new component. This component should produce some HTML
/*const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'snowboarding'}, (data) => {
      console.log(data);
      this.setState({videos: data});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
// should be the instance of the component, not the component class itself, which means
// should put <App></App> as the param
ReactDOM.render(<App />, document.querySelector('.container'));
