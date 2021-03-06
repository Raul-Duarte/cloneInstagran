import React, { Component } from 'react';

import { View, StyleSheet, Image, Dimensions } from 'react-native';

import Autor from './Autor'
import Comments from './Comments'
import AddComment from './addComments'
export default class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={this.props.image} />
                <Autor email={this.props.email} nickname={this.props.nickname}/>
                <Comments comments={this.props.comment}/>
                <AddComment/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})