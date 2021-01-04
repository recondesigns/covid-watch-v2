import React from 'react';
import ReactDOM from 'react-dom';
import Data from './providers/Data'
import AppState from './providers/AppState'
import App from './App';
import './index.css';

function Index() {
  return (
    <Data>
      <AppState>
        <App />
      </AppState>
    </Data>
  )
}

ReactDOM.render(
    <Index />, document.getElementById('root')
)