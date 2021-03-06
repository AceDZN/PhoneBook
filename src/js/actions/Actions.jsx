var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

module.exports =  {
  saveContact: function(contact){
    console.log(contact,"contact");
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE_CONTACT,
      contact: contact
    })
  },
  getContacts: function(contacts){
    console.log(contacts);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GET_CONTACTS,
      contacts: contacts
    })
  }
}
