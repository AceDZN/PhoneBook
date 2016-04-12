var Firebase = require('firebase');
var AppActions = require('../actions/Actions');

var firebaseURL = 'https://acedzn-contatctlist.firebaseio.com/contacts';

module.exports = {
  saveContact: function(contact){
    this.firebaseDB = new Firebase(firebaseURL);
    this.firebaseDB.push({contact:contact});
  },
  getContacts: function(){
    this.firebaseDB = new Firebase(firebaseURL);
    this.firebaseDB.once('value',function(snapshot){
      var contacts = [];
      snapshot.forEach(function(child){
        var contact = {
          id: child.key(),
          first_name: child.val().contact.first_name,
          last_name: child.val().contact.last_name,
          full_name: child.val().contact.full_name,
          email: child.val().contact.email,
          phone: child.val().contact.phone
        }
        contacts.push(contact);
        AppActions.getContacts(contacts);
      });
    })
  }

}
