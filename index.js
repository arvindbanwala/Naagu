/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureNaaguStore from './store/configureStore';
import NaaguScaffoldApp from './containers/NaaguScaffoldApp';

const store = configureNaaguStore()
const NaaguRedux = () => (
    <Provider store = { store }>
        <NaaguScaffoldApp />
    </Provider>
)

AppRegistry.registerComponent(appName, () => NaaguRedux);
