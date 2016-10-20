var React = require('react');

var UserContainer = React.createClass({
    getInitialState : function(){
        return{
            userdata : {
              name : '',
              location : '',
              comment  : '',
              image : 'https://www.solarimpulse.com/img/profile-no-photo.png'
            }
        }
    },
    onUpdateName : function(e){
        var arr = this.state.userdata
        arr.name = e.target.value;
        this.setState({userdata : arr}); 
    },
    onUpdateLocation : function(e){
        var arr = this.state.userdata;
        arr.location = e.target.value;
        this.setState({userdata : arr}); 
    },
    onUpdateComment : function(e){
        var arr = this.state.userdata;
        arr.comment = e.target.value;
        this.setState({userdata : arr}); 
    },
    onSubmitUser : function(e){
        e.preventDefault()  ;
        if(this.state.userdata.name && this.state.userdata.location && this.state.userdata.comment){
            var arr;
            if( !localStorage.getItem('userList')) {
                arr = [];
            }
            else{
                arr =  JSON.parse(localStorage.getItem('userList'));
            }

            var userarr = this.state.userdata
            arr.push(userarr);
            localStorage.setItem('userList',JSON.stringify(arr));
            window.location.href = "#/users";

        }
        else{
            alert('Enter the details');
        }
    },
    render: function() {
        return(
            <div>
                <form onSubmit={this.onSubmitUser}>
                    <h4>{this.props.route.header}</h4>
                    <input type="text" placeholder="Username" value={this.state.userdata.name} onChange={this.onUpdateName} /><br/>
                    <input type="text" placeholder="Location" value={this.state.userdata.location}  onChange={this.onUpdateLocation} /><br/>
                    <input type="text" placeholder="Comment" value={this.state.userdata.comment}  onChange={this.onUpdateComment} /><br/>
                    <button type="submit" >Save</button>
                </form>
            </div>
        )
    }
});

module.exports = UserContainer;