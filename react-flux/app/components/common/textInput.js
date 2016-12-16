var React = require('react');

var TextInput = React.createClass({
       render : function(){
        return(
             <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text"
                      className="form-control" 
                      ref="firstName" 
                      name="firstName"
                      placeholder="First Name"
                      value={this.props.author.firstName}
                      onChange={this.props.setAuthorState} />
                  <div className="error">{this.props.error}</div>
               </div>
        )
    }
});


module.exports = TextInput;