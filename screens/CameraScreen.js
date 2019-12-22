import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import {Camera} from 'expo-camera'
import * as Permissions from 'expo-permissions'
import {FontAwesome} from '@expo/vector-icons'

export default class CameraScreen extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            hasCameraPermissions: null,
            type: Camera.Constants.Type.back,
            isFlashLIghtOn: Camera.Constants.FlashMode.off
        }
    }
    
    static navigationOptions = {
        title: "Camera" 
    }

    //ask for camera permission

    async componentDidMount(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: status === "granted"
        });
    }

    // Flip the camera
    flipCamera = () => {
        this.setState({
            type: 
            this.state.type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        })
    }

    //Toggle Flashlight
    flashLight = () => {
        this.setState({
            isFlashLIghtOn: 
            this.state.isFlashLIghtOn === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
        })
    }

    //Take Picture and send to home
    takePicture = async () => {
        if(this.camera) {
            let photo = await this.camera.takePictureAsync();
            this.props.navigation.navigate("HomeScreen", {photo: photo});
        }
    }
    render(){
        const { hasCameraPermissions } = this.state;
        const { navigate } = this.props.navigation;
        if (hasCameraPermissions === null) {
            return <View />
        } else if (hasCameraPermissions === false) {
            return <View><Text>No access to Camera</Text></View>
        } else if (hasCameraPermissions === true ){
            return (
                <View style={styles.container}>
                    <Camera 
                    style = {styles.cameraView}
                    type = {this.state.type}
                    flashMode = {this.state.isFlashLIghtOn}
                    ref={ref => {
                        this.camera = ref;
                    }}
                    >
                        <View style = {styles.actionContainer}>
                            <TouchableOpacity
                            onPress={() => this.flipCamera()}
                            style={styles.iconHolder}>
                                <FontAwesome
                                name="camera"
                                size={35}
                                style={styles.icon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => this.takePicture()}
                            style={styles.iconHolder}>
                                <FontAwesome
                                name="circle"
                                size={35}
                                style={styles.icon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => this.flashLight()}
                            style={styles.iconHolder}>
                                <FontAwesome
                                name="flash"
                                size={35}
                                style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View> 
            );
        }
        
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cameraView: {
        flex: 1
    },
    actionContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent"
    },
    iconHolder: {
        flex: 1,
        alignItems: "center",
        alignSelf: "flex-end"
    },
    icon: {
        marginBottom: 10,
        color: "#fff"
    }
  
});