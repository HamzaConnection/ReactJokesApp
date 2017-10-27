import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';
import JokeModel from '../jokeModel'
export default  class AddJoke extends React.Component {

    constructor() {
        super();
        this.addJoke = this.addJoke.bind(this); // binding this
        this.updateState = this.updateState.bind(this); 
        this.state = {
            joke: '', // to start with a blank input field
            allJokes : JokeModel.getAll(),   
        }
        
        
    }

    componentWillMount() {
        JokeModel.on('addJoke', this.addJoke );
    }

    componentWillUnmount() {
        JokeModel.removeListener('addJoke', this.addJoke);
    }

    updateState(e){
		this.setState({joke: e.target.value});
	}

    addJoke() {
        JokeModel.addJoke(this.state.joke)
        this.setState({
            joke : '' // for at clear vores inputfelt
        });
    }


    render() {
        const {allJokes} = this.state;   
        const jokesList = allJokes.map((jokesList, id) => <li key={id}>{jokesList.joke}</li>);

        return (
            <div>
                <h1>Add Joke:</h1>
                <br/>
                {jokesList}
                <input type="text" value={this.state.joke} onChange={this.updateState}/>
                <button onClick={this.addJoke}>Add joke</button>
                <Link to="/"><button>Back</button></Link>
            </div>
            
        );
    }
}


