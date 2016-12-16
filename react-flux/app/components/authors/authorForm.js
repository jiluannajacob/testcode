var React = require('react');
var TextInput =require('../common/textInput.js')

var AuthorForm = React.createClass({
    render : function(){
        return(
            <form onSubmit={this.props.saveAuthor}>
              <TextInput author={this.props.author}/>

               <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" ref="lastName" name="lastName" placeholder="Last Name" 
                      value={this.props.author.lastName} onChange={this.props.setAuthorState} />
               </div>

               <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
});

module.exports = AuthorForm;