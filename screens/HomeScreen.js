import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
export default class HomeScreen extends React.Component{

    static navigationOptions = {
        title: "PhotoClicker"
    }

    render(){

        let photo = this.props.navigation.getParam("photo", "empty")
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    resizeMode="center"
                    style = {styles.imageHolder}
                    source={
                        photo === "empty" ? require("../assets/viking.png") : photo
                    }
                />
                <Button
                title="Take Photo"
                style={styles.button}
                onPress={()=>{
                    this.props.navigation.navigate('CameraScreen')
                }}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageHolder: {
        alignSelf: "center",
        height: 500,
        margin: 20
    },
    button: {
        margin: 20
    }
});