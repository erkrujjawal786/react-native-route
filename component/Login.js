import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

export class Login extends Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        this.Login = this.Login.bind(this)
    }
    Login() {
        const userEmail = this.state.email
        const userPass = this.state.password
        console.log("======value", userEmail, userPass)
        alert(userEmail, userPass)
    }



    render() {
        return (
            <View style={styles.containor}>

                <TextInput
                    style={styles.text}
                    placeholder="Username"
                    onChangeText={(email) => this.setState({ email })} />
                <TextInput
                    style={styles.text}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })} />

                <View style={styles.logInButton} >
                    <Button
                        onPress={() => this.Login()}
                        title="Login" />
                </View>

                <View style={styles.signUpButton}>
                    <Button color="red"
                        onPress={() => this.props.navigation.navigate('Register')}
                        title="SIGNUP" />
                </View>

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


export default Login