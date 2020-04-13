import React, { Component } from 'react';

import { View, StyleSheet, FlatList } from 'react-native';

import Header from '../components/Header'
import Post from '../components/Post'

export default class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Raul Bruno Palmeira',
            email: 'raul@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comment: [{
                nickname: 'Joh Elder',
                comment: 'Top de mais'
            }, {
                nickname: 'Teco Teco',
                comment: 'Musa do verão'
            }]
        }, {
            id: Math.random(),
            nickname: 'Andrezza LIvia',
            email: 'andrezza@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comment: [],
        }]
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />
                    }
                />
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    }
})