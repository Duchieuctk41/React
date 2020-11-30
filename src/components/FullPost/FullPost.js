import React, { Component } from 'react';
import axios from 'axios';

import classes from './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        if (this.props.id) {
            axios.get('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    // console.log(response);
                    this.setState({loadedPost: response.data});
                });
        }
        
    }
    render () {

        let post = <p>Please select a Post!</p>;
        if (this.props.id) {
            post = <p>Loading...!</p>;
        }
        
        if (this.state.loadedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.loadedPost.title}</h1>
                    <p>{this.loadedPost.content}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;
