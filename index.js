/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { myApi } from './redux/api';

const Root = () => (
  <ApiProvider api={myApi}>
    <App />
  </ApiProvider>
);

AppRegistry.registerComponent(appName, () => Root);
