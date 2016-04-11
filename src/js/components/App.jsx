var React = require('react');
var AppActions = require('../actions/Actions');
var AppStore = require('../stores/Store')

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
      <div>
        APP PLACEHOLDER
      </div>
    )
  },
  _onChange: function(){
    this.state(getAppState());
  }


});
