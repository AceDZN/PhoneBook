var React = require('react');
var AppActions = require('../actions/Actions');
var AppStore = require('../stores/Store')

module.exports =  React.createClass({
  handleFormSubmit: function(){

  },
  render: function(){
    return (
      <div className="panel panel-default contact-list">
        <div className="panel-heading">
          <h3 className="panel-title">Contacts</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item">
              <dl className="dl-horizontal">
                <dt>Alex Sindalovsky</dt>
                <dd>+972-58-4491356</dd>
                <dt></dt>
                <dd><a href="mailto:design@acedzn.com">design@acedzn.com</a></dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});
