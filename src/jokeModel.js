import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { EventEmitter } from "events";

class JokeModel extends EventEmitter {
    constructor() {
        super();

        this.JokesList = [
            { id:1, joke: "A day without sunshine is like, night." },
            { id:2, joke: "At what age is it appropriate to tell my dog that he's adopted?" },
            { id:3, joke: "I intend to live forever, or die trying"}
        ];
    }

    getAll() {
        return this.JokesList
    }
    
    getRandomJoke() {
        let randomNum = Math.floor((Math.random() * this.JokesList.length)); // Return a random number between 0 and JokesList length       
        return this.JokesList[randomNum].joke; 
    }

    addJoke(joke) {
 
        let id = this.JokesList.length+1;
        this.JokesList.push({
            id : id,
            joke: joke
        });

        this.emit("change");
    }


}

const jokeModel = new JokeModel();


export default jokeModel;