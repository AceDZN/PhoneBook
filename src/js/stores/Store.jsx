var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var API = require('../utils/Api');

var CHANGE_EVENT = 'change';

var _items = [];

var Store = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT,callback)
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT,callback)
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){

  }
  return true;

});

module.exports = Store;
