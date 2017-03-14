import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyC0VwxSHya26_rWFmVOXUDUO95ygbr70Zw';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
// should be the instance of the component, not the component class itself, which means
// should put <App></App> as the param
ReactDOM.render(<App />, document.querySelector('.container'));
