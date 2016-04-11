var React = require('react');
module.exports =  React.createClass({
  render: function(){
    return (
      <dl className="dl-horizontal">
        <dt>{this.props.contact.full_name}</dt>
        <dd>{this.props.contact.phone}</dd>
        <dt></dt>
        <dd><a href={"mailto:"+this.props.contact.email}>{this.props.contact.email}</a></dd>
      </dl>
    )
  }
});
