import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Routes from './components/Route';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

class App extends Component {
  render() {

    state = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
        <Provider store={state}>
          <Routes/>
        </Provider>
    )
  }
}

export default App