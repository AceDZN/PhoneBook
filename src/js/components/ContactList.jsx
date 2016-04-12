var React = require('react');
var AppActions = require('../actions/Actions');
var AppStore = require('../stores/Store')
var Contact = require('./Contact');
module.exports =  React.createClass({
  renderContactList: function(){
    var listItems = [];
    for (var key in this.props.contacts ){
      listItems.push(
        <li className="list-group-item" key={"contact_"+key}>
          <Contact contact={this.props.contacts[key]} />
        </li>
      )
    }
    return listItems;
  },
  render: function(){
    return (
      <div className="panel panel-default contact-list">
        <div className="panel-heading">
          <h3 className="panel-title">Contacts</h3>
        </div>

        <div className="panel-body">
          <ul className="list-group">
            {this.renderContactList()}
          </ul>
        </div>
      </div>
    )
  }
});
