var React = require('react');
var AppActions = require('../actions/Actions');
var AppStore = require('../stores/Store');
var AddContactForm = require('./AddContactForm');
var ContactList = require('./ContactList');

function getAppState(){
  return{
    contacts: AppStore.getContacts()
  }
}

module.exports = React.createClass({
  getInitialState: function(){
    return getAppState()
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },
  componentUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },
  render: function(){
    console.log(this.state.contacts,"this.state.contacts");
    return (
      <div className="row">
        <div className="col-sm-7">
          <ContactList contacts={this.state.contacts}/>
        </div>
        <div className="col-sm-5">
          <AddContactForm />
        </div>
      </div>
    )
  },
  _onChange: function(){
    this.setState(getAppState());
  }


});
