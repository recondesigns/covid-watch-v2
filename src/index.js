import React from 'react';
import ReactDOM from 'react-dom';
import Data from './providers/Data'
import App from './App';
import './index.css';

function Index() {
  return (
    <Data>
      <App />
    </Data>
  )
}

ReactDOM.render(
    <Index />, document.getElementById('root')
)