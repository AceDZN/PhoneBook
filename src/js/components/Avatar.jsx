var React = require('react');
var md5 = require('md5');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      size: this.props.size || 50,
      email: this.props.email || "gravatar@default.mail",
      alt: this.props.alt || this.props.email
    }
  },
  render: function(){
    return <img alt={this.state.alt} src={this.getAvatarUrl()} />
  },
  getAvatarUrl: function(){
    var gravatarUrl = 'http://gravatar.com/avatar/';
    var hash;
    var email = this.state.email;
    hash  = email.trim();
    hash = hash.toLowerCase();
    hash = md5(hash);
    return (gravatarUrl + hash + '?size=' + this.state.size.toString());
  }
});
