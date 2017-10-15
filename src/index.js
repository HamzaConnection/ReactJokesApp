
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Jokes from './components/jokes';



import { BrowserRouter, Route, Link} from 'react-router-dom';

class Index extends React.Component {
    constructor(props) {
		super(props);
           
            
    }
    
}

const app = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
    <div>
    <Route path ='/' component={App}/>
    <Route exact path ='/jokes' component={Jokes}/>
 
    
    </div>
    </BrowserRouter>,
    app
    );

