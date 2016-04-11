var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var API = require('../utils/Api');

var CHANGE_EVENT = 'change';

var _contacts = [];

var Store = assign({}, EventEmitter.prototype, {
  saveContact: function(contact){
    _contacts.push(contact);
  },
  getContacts: function(){
    return _contacts;
  },
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
    case AppConstants.SAVE_CONTACT:
      Store.saveContact(action.contact);
      Store.emit(CHANGE_EVENT);
      break;
  }
  return true;

});

module.exports = Store;
