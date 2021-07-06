import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 import Home from '../pages/Home/Home.page'
 import Contact from '../pages/Contact/Contact.page'

const Routes = ( ) => {
    
 
    
    return (
        <Router>
            <Route path="/" exact component={() => <Home  />} />
            <Route path="/contact" exact component={() => <Contact/>} />
            
            

        </Router>
    );
};

export default Routes;