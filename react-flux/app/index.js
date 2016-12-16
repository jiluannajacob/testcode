var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/router.js');

//var InitializeActions = require('./actions/initializeActions');
//InitializeActions.initApp();

//window.jQuery = require('jquery');
//window.$ = require('jquery');

//require('bootstrap/dist/css/bootstrap.css');
//require('bootstrap/dist/css/bootstrap-theme.css');
//require('bootstrap/dist/js/bootstrap.js');

ReactDOM.render(routes ,
                document.getElementById('app') );

