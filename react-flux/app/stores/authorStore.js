var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; // used to broadcast events to store
var ObjectAssign = require('object-assign'); // used to assign objects
var _ = require('lodash'); // used to Iterating arrays, objects, & strings
var CHANGE_EVENT ='change';

var _authors = {authors : [{id : 1, name :'author 1'},{id : 2, name :'author 2'},{id : 3, name :'author 3'}]}; // private variable 

var AuthorStore = ObjectAssign({}, EventEmitter.prototype, {
    addChangeListener : function(callback){
        this.on(CHANGE_EVENT , callback);
    },
    removeChangeListener : function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange : function(){
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors : function(){
        return _authors;
    },
    getAuthorById :function(id){
        return _.find(_authors, {id : id} );
    }
}
);

Dispatcher.register(function(action){
   
    switch(action.actionType){
        case ActionTypes.INITIALIZE : 
                    _authors = action.initialData;
                    AuthorStore.emitChange();
            console.log('store')
                    break;
        case ActionTypes.CREATE_AUTHOR : 
                    _authors.push(action.author);
                    AuthorStore.emitChange();
                    break;
        default :
            break;

    };
});

module.exports = AuthorStore;