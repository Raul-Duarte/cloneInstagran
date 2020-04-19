import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput

} from 'react-native';

export default class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Nome" style={styles.input}
          autoFocus={true} value={this.state.name}
          onChangeText={name = this.setState({ name })}
        />
        <TextInput placeholder="Email" style={styles.input}
          value={this.state.email} keyboardType='email-address'
          onChangeText={email = this.setState({ email })}
        />
        <TextInput placeholder="Senha" style={styles.input}
          value={this.state.email} secureTextEntry={true}
          onChangeText={email = this.setState({ email })}
        />
        <TouchableOpacity onPress={() => { }} style={styles.buttom}>
          <Text style={styles.buttomText} >SAlvar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  },
  input: {
    marginTop:20,
    width:'90%',
    backgroundColor:'#EEE',
    height:40,
    borderWidth:1,
    borderColor:'#333',
    paddingLeft:15
  },
  buttom: {
    marginTop:30,
    padding:10,
    backgroundColor:'#4286f4'
  },
  buttomText: {
    fontSize:20,
    color:'#FFF',
  }
})