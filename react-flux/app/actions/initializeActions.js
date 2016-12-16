var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes')
//var AuthorApi =require('../api/authorApi');

var InitializeActions = {
    initApp : function(){
        Dispatcher.dispatch({
            actionType : ActionTypes.INITIALIZE,
            initalData : {authors : [{id : 1, name :'author 1'},{id : 2, name :'author 1'}]}
        });
        console.log('initapp')
    }
};

module.exports = InitializeActions;