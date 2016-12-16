var React = require('react');
var AuthorStore = require('../../stores/authorStore');
var AuthorForm = require('./authorForm.js');
var AuthorActions = require('../../actions/authorActions.js');

var authorAdd = React.createClass({
    getInitialState : function(){
      return {
          author : { id : '', firstName : '', lastName : '' }
      }  
    },
    setAuthorState : function(event){
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        this.setState({author:this.state.author});
    },
    saveAuthor :function(event){
      event.preventDefault();
      AuthorActions.createAuthor(); 
    },
    render : function(){
        return(
            <div>
                <h4>Manage Author</h4>
                <AuthorForm author={this.state.author} setAuthorState={this.setAuthorState} saveAuthor={this.saveAuthor} />
            </div>
        )
    }
});

module.exports = authorAdd;