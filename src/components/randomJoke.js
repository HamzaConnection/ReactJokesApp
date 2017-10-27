import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';
import JokeModel from '../jokeModel'

export default  class randomJoke extends Component {
    
    constructor() {
        super();
        this.getRandomJoke = this.getRandomJoke.bind(this);
        this.state = {
            randomJoke : JokeModel.getRandomJoke(),
        }        
    }

    componentWillMount() {
        JokeModel.on('change', this.getRandomJoke);
    }

    componentWillUnmount() {
        JokeModel.removeListener('change', this.getRandomJoke);
    }

    getRandomJoke() {
        this.setState({
            randomJoke: JokeModel.getRandomJoke()
        });
    } 

    render() {
        const {randomJoke} = this.state;   

        return (
            <div>
                <h1>Random Joke:</h1>
                <p>Here is your random joke: {randomJoke}</p>
                <Link to="/"><button>Back</button></Link>
            </div>
        );
    }
}