import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Camera extends React.Component{

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Camera Screen</Text>
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
  
});