import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

class Login extends Component {
    state = {
        name: 'Temporario',
        email: '',
        password: '',
    }

    login = () => {
        this.props.onLogin({...this.state})
        this.props.navigation.navigate('Home', { screen: 'Profile' });
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

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Register')
                }} style={styles.buttom}>

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
        fontSize: 28,
        color: '#fff',
        height: 40,
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: "#EEE",
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    }

})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)