var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/Api');
var App = require('./components/App');

AppAPI.getContacts();

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
