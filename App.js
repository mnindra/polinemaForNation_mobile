	/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './app/reducers';
import AppWithNavigationState from './app';

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
    	<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
    );
  }
}