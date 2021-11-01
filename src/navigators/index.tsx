import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateRoom from '../screens/CreateRoom';
import VideoCall from '../screens/VideoCall';
import { SCREEN } from './constants';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={SCREEN.CREATE_ROOM}>
      <Stack.Screen name={SCREEN.CREATE_ROOM} component={CreateRoom} />
      <Stack.Screen name={SCREEN.VIDEO_CALL} component={VideoCall} />
    </Stack.Navigator>
  );
}

export { AppNavigator }