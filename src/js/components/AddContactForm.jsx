var React = require('react');
var AppActions = require('../actions/Actions');
var AppStore = require('../stores/Store')

module.exports =  React.createClass({
  handleFormSubmit: function(e){
    e.preventDefault();
    var contact = {
      first_name: this.refs.fname.value.trim(),
      last_name: this.refs.lname.value.trim(),
      full_name: this.refs.fname.value.trim()+" "+this.refs.lname.value.trim(),
      phone: this.refs.phone.value.trim(),
      email: this.refs.email.value.trim(),
    }
    AppActions.saveContact(contact);
    
  },
  render: function(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Add Contact To Phonebook</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input type="text" className="form-control" id="fname" ref="fname" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input type="text" className="form-control" id="lname" ref="lname" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" className="form-control" id="phone" ref="phone" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" ref="email" placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
});
