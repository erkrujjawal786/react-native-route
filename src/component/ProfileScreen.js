import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export class ProfileScreen extends Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            password: ''
        }
    }


    render() {
        return (
            <View style={styles.containor}>
                <Text>Profile Screen</Text>
                <Button onPress={()=>this.props.navigation.navigate('Notifications')} title="Go to notification" >Go to notification</Button>
            </View>

        )
    }


}

const styles = StyleSheet.create({
    containor: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 30,
        paddingLeft: 30,
        backgroundColor: 'powderblue',
        // alignSelf:'stretch'
        margin: 1
    },

    text: {
        height: 42,
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 18,
        margin: 8,
        color: "black",
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: "center"
    }
});




export default ProfileScreen;