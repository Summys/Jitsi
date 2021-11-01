import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';
import { useDispatch } from 'react-redux';
import { setCall } from '../store/user';

const VideoCall = ({
  route: {
    params: { displayName, call },
  },
  navigation
}: any) => {
  const dispatch = useDispatch();

  const onConferenceTerminated = () => {
    dispatch(setCall(''))
    navigation.goBack()
  }

  useEffect(() => {
    if (displayName && call) {
      JitsiMeet.call(call, { displayName });
    }
  }, [])

  return (
    <View style={styles.container}>
      <JitsiMeetView onConferenceTerminated={onConferenceTerminated} style={styles.videoContainer} />
    </View>
  )
}

export default VideoCall;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  videoContainer: {
    flex: 1,
    height: '100%',
    width: '100%'
  }
})