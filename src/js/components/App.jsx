var React = require('react');
var AppActions = require('../actions/Actions');
var AppStore = require('../stores/Store');
var AddContactForm = require('./AddContactForm');
var ContactList = require('./ContactList');

function getAppState(){
  return{

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
    return (
      <div className="row">
        <div className="col-sm-7">
          <ContactList />
        </div>
        <div className="col-sm-5">
          <AddContactForm />
        </div>
      </div>
    )
  },
  _onChange: function(){
    this.state(getAppState());
  }


});
