import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppNavigator } from './navigators';
import { Text } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Text>Hello</Text> */}
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer >
    </Provider>
  );
};

export default App;