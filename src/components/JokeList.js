import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';
import Jokes from './jokes.js';

export default  class JokeList extends Component {
    constructor() {
		super();

       // hvordan får jeg fandt i jokes.js state skal bruge arrayet
        
    }
    
    componentWillMount() {
	}	

	componentWillUnmount() {
	}


    render() {

const jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
]



        
        return (
            <div>
                <h1>All Jokes:</h1>
                <Jokes jokes = {jokes}/>
            </div>
        );
    }


}