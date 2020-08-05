import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';
import {postBlogs} from '../action';
import {connect} from 'react-redux';

class Post extends Component {

    state={
        title: "",
        content: ""
    }

    submit = () => {
        this.props.postBlogs(this.state.title, this.state.content)
        this.setState({
            title:'',
            content:''
        })
        this.props.navigation.navigate('NavStack')
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text> Create Blog Article</Text>
                <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1 }} placeholder="title" onChangeText={title => this.setState({title})} value={this.state.title}></TextInput>
                <TextInput style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1 }} placeholder="content" onChangeText={content => this.setState({content})} value={this.state.content}></TextInput>
                <Button title="Submit" onPress={this.submit}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#fff'
    }
})

export default connect(null, {postBlogs})(Post);
