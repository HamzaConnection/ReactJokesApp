import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';
import JokeModel from '../jokeModel'
export default  class Jokes extends React.Component {

    constructor() {
        super();
        this.getJokes = this.getJokes.bind(this);
        this.state = {
            allJokes : JokeModel.getAll(),
        }
        
    }

    componentWillMount() {
        JokeModel.on('change', this.getJokes);
    }

    componentWillUnmount() {
        JokeModel.removeListener('change', this.getJokes);
    }

    getJokes() {
        this.setState({
            jokes: JokeModel.getAll()
        });
    } 

    render() {

        
        const {allJokes} = this.state;   
        
        const jokesList = allJokes.map((jokesList, id) => <li key={id}>{jokesList.joke}</li>);
        

        return (
            <div>
                <h1>List of all Jokes:</h1>
                {jokesList}
                <Link to="/"><button>Back</button></Link>
            </div>
        );
    }
}


