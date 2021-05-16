import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet} from 'react-native';

export class Register extends Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            password: ''
        }
        this.onSignup = this.onSignup.bind(this)
    }
    onSignup() {
        const userEmail = this.state.email
        const userName = this.state.name
        const userPass = this.state.password
        console.log("======value", userEmail, userName, userPass)
        alert(userEmail, userName, userPass)
    }

    render() {
        return (
            <View style={styles.containor}>

                <TextInput  style={styles.text}
                    placeholder="name"
                    onChangeText={(text) => this.setState({ name:text })} />

                <TextInput  style={styles.text}
                    placeholder="email"
                    onChangeText={(text) => this.setState({ email:text })} />

                <TextInput  style={styles.text}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ password:text })} />


                <Button color="red" 
                    onPress={() => this.onSignup()}
                    title="Sign Up" />

            </View>

        )
    }


}

const styles = StyleSheet.create ({
    containor:{
        flex:1,
        justifyContent: 'center',
        paddingRight: 30,
        paddingLeft: 30,
        backgroundColor: 'powderblue',
        // alignSelf:'stretch'
        margin:1
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
    }
});




export default Register