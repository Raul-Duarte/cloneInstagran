import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    login = () => {
        this.props.navigation.navigate('Profile')
    }
    render() {
        return (
            <View style={styles.container} >
                <TextInput placeholder="E-mail" style={styles.input}
                    autoFocus={true} keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput placeholder="Senha" style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity onPress={this.login} style={styles.buttom}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.buttom}>
                    <Text style={styles.buttonText}>Criar Conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize:28,
        color: '#fff',
        height: 40,
    },
    input: {
        marginTop:20,
        width:'90%',
        backgroundColor:"#EEE",
        height:40,
        borderWidth:1,
        borderColor:'#333'
    }

})

