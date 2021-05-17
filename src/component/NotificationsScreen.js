import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export class NotificationsScreen extends Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    



    render() {
        return (
            <View style={styles.containor}>
                <Text>Notification Screen</Text>
                <Button onPress={()=>this.props.navigation.navigate('Settings')} title="Go to Setting" >Go to Setting</Button>


            </View>

        )
    }



}

const styles = StyleSheet.create({
    containor: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: 'powderblue',
        alignSelf:'stretch'
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
        textAlign:"center"
    },
    logInButton: {
        paddingRight: 60,
        paddingLeft: 60,
        justifyContent: 'space-between',

        paddingVertical: 10,
    },

    signUpButton: {
        paddingRight: 80,
        paddingLeft: 80,
        justifyContent: 'space-between',
        
        paddingVertical: 10,

    }

});


export default NotificationsScreen;