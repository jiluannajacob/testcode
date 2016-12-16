var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Layout = require('../components/layout.js');
var AuthorManagement = require('../components/authors/authorManagement.js');
var AuthorAdd = require('../components/authors/authorAdd.js');


var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Layout} >
            <IndexRoute component={AuthorManagement} />
            <Route path='/authors' component={AuthorManagement} />
            <Route path='/author' component={AuthorAdd} >
              <Route path='/author/:authorId' component={AuthorAdd} />
            </Route>  
             
        </Route>
    </Router>
    
);


module.exports = routes;