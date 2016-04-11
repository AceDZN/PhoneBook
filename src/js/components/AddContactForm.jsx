var React = require('react');
var AppActions = require('../actions/Actions');
var AppStore = require('../stores/Store')

module.exports =  React.createClass({
  handleFormSubmit: function(){
    
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
              <label htmlFor="fName">First Name</label>
              <input type="text" className="form-control" id="fName" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="lName">Last Name</label>
              <input type="text" className="form-control" id="lName" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" className="form-control" id="phone" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
});
