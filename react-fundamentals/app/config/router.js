var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main.js');
var Home = require('../components/Home.js');
var UserList = require('../components/UserList.js');
var UserContainer =require('../containers/UserContainer.js');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main} >
            <IndexRoute component={Home} />
            <Route path='/users' component={UserList} />
            <Route path='/addNewUser' component={UserContainer} header="Add New user" />
        </Route>
    </Router>
    
);


module.exports = routes;