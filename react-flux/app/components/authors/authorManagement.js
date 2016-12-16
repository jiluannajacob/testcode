var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList.js');

var AuthorManagement = React.createClass({
    getInitialState :function(){
        return {
            authors : AuthorStore.getAllAuthors()
        }
    },
    render : function(){
        return(
            <div>
                <h5>Author Management</h5>
                <Link to='/author' >Add new </Link>
                <AuthorList authors={this.state.authors.authors}/>
            </div>
        )
    }
});

module.exports = AuthorManagement;