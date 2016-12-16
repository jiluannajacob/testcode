var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
//var AuthorApi = require('../api/authorApi');

var AuthorActions = {
    createAuthor : function(author){
        var newAuthor = AuthorApi.saveAuthor(author);
        
        Dispatcher.dispatch({
            actionType : ActionTypes.CREATE_AUTHOR,
            author : newAuthor
        })
    }
    
};

module.exports = AuthorActions;