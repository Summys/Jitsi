import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import ScreenWrapper from '../components/ScreenWrapper';
import { RootState } from '../store';
import { setCall, setDisplayName } from '../store/user';
import { SCREEN } from '../navigators/constants';

const CreateRoom = ({ navigation }: any) => {
    const { displayName, call } = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch();

    const handleNameInput = (displayName: string) => dispatch(setDisplayName(displayName))

    const handleCallInput = (call: string) => dispatch(setCall(call))

    const handleCreateRoomButton = () => joinCall()


    const joinCall = () => {
        navigation.navigate(SCREEN.VIDEO_CALL, {
            displayName,
            call
        })
    }

    /*
    If store persistence is implemented, we could redirect the user back to the Videocall screen
    useEffect(() => {
        if (call) {
            joinCall()
        }
    }, [])
    */

    return (
        <ScreenWrapper
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps={'always'}
            removeClippedSubviews={false}
        >
            <TextInput
                mode="outlined"
                style={styles.inputContainerStyle}
                dense
                placeholder="Your name"
                value={displayName}
                onChangeText={handleNameInput}
            />
            <TextInput
                mode="outlined"
                style={styles.inputContainerStyle}
                dense
                placeholder="Room's name"
                value={call}
                onChangeText={handleCallInput}
            />

            <Button mode="contained" onPress={handleCreateRoomButton} style={styles.button}>
                Create room
            </Button>
        </ScreenWrapper>
    )
}

export default CreateRoom;

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    inputContainerStyle: {
        margin: 8,
    },
    button: {
        margin: 4,
    },
})