import React from 'react';
import ReactDOM from 'react-dom';

import { Link} from 'react-router-dom';
import JokeModel from '../jokeModel'
export default  class Jokes extends React.Component {

    constructor() {
        super();
        this.state = {
            jokes : JokeModel.getAll()
        }
        
    }

ComponentWillMount()
{
    JokeModel.on("change", () =>{
        this.setState({jokes : JokeModel.getAll(),
        });
    });
}
        

    render() {
        // foreach se videon
        /*
        var list = JokeModel.getAll();
        Object.keys(list).forEach(function(joke) {
            joke.
        
        })
        */

        //<p>{this.props.jokes.map((joke, i) => <li key={i}>{joke}</li>)}</p>
        return (
            <div>
                <h1>List of all Jokes:</h1>
                <ul >
                {JokeComponents}
                </ul>
                <Link to="/"><button>Back</button></Link>
            </div>
        );
    }
}

