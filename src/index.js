
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AllJokes from './components/allJokes'; // fix det her 
import RandomJoke from './components/randomJoke';
import addJoke from './components/addJoke';


import { BrowserRouter, Route, Link } from 'react-router-dom';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

}
const app = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <div align="center">
            <Route path='/' component={App} />
            <Route exact path='/allJokes' component={AllJokes} />
            <Route exact path='/randomJoke' component={RandomJoke} />
            <Route exact path='/addJoke' component={addJoke} />
            
            <Link to={"/allJokes"}><button> All joke </button></Link>
            <br/>
            <Link to={"/randomJoke"}><button> Random joke </button></Link>
            <br/>
            <Link to={"/addJoke"}><button> Add joke </button></Link>
        </div>
    </BrowserRouter>,
    app
);

