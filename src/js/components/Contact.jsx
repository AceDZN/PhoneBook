var React = require('react');
var Gravatar = require('./Avatar');

module.exports =  React.createClass({
  render: function(){
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <Gravatar size="64" email={this.props.contact.email} />
          </a>
        </div>
        <div className="media-body">
          <div className="edit-btn">
            <span className="label label-info">EDIT</span>  <span className="label label-danger">X</span>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <b>{this.props.contact.full_name}</b><br />
              <a href={"mailto:"+this.props.contact.email}>{this.props.contact.email}</a><br />
            </div>
            <div className="col-sm-6">
              <br />
              {this.props.contact.phone}
            </div>

          </div>
        </div>
      </div>

    )
  }
});
