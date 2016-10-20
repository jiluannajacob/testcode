var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
   render : function(){
        return(
            <div style={{margin:'30px'}}>
               <h4>Lorem ipsum</h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate pulvinar ipsum, eu semper nisl pharetra eu. Duis sed sagittis lorem, at bibendum ante. Maecenas eget condimentum augue. Praesent malesuada iaculis viverra. Suspendisse sodales, eros suscipit ultricies posuere, turpis mauris luctus est, eget fringilla nisl purus at tellus. Proin convallis elit justo, sed porttitor ante sagittis ac. Donec ultricies urna vitae ornare porttitor. </p>
               <Link to='/users'>
                    <button type="button">Subscribers</button>
                </Link>
              
             </div>

        );
    }

});

module.exports = Home;