var React =require('react');
var Header = require('../components/layout/header.js');
var Footer = require('../components/layout/footer.js');

var Layout = React.createClass({
    render: function(){
        return(
            <div>
                <Header />
                <div>{this.props.children}</div>
                <Footer />
            </div>
        )
    }
});

module.exports = Layout;