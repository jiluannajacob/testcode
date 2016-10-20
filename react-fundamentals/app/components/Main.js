var React = require('react');

var Main = React.createClass({
    render : function(){
        return (
            <div className="main-container" style={{margin:'30px'}}>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;