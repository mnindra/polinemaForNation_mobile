	/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './app/reducers';
import AppWithNavigationState from './app/index';
import {StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
    	<StyleProvider style={getTheme(material)}>
				<Provider store={store}>
					<AppWithNavigationState />
				</Provider>
			</StyleProvider>
    );
  }
}