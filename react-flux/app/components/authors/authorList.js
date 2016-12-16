var React = require('react');

var AuthorList = React.createClass({
       render : function(){
        return(
            <div>
                <h5>Authors List</h5>
                <ul>
                    {this.props.authors.map((result) => (
                      <li key={result.id}> {result.name} </li>
                    ))}
                </ul>
            </div>
        )
    }
});


module.exports = AuthorList;