var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var btnStyle = {
  background:"#3C763D", marginRight:"5px", color:"#fff",border : "1px solid #3C763D",padding :"5px", margin:"0px 20px",width:"150px" 
};

var UserList = React.createClass({
    getInitialState :  function(){
        if(localStorage.getItem('userList')) {
            return {
                 userList :  JSON.parse(localStorage.getItem('userList'))
            }
        }
        else{
            return {
                 userList :  []
            } 
        }
    },
    removeUser: function(i){
        var arr = this.state.userList;
        arr.splice(i,1);
        this.setState({userList : arr});
        localStorage.setItem('userList',JSON.stringify(arr));
    },
    updateUser: function(newCmnt, i){
        var arr = this.state.userList;
        arr[i]['comment'] = newCmnt;
        this.setState({userList : arr});
        localStorage.setItem('userList',JSON.stringify(arr));
    },
    eachUser: function(user , i ){
         return(<SubscribersList key={i} index={i}  deleteUser={this.removeUser} editUser={this.updateUser} data={user} /> );
    },
     render : function(){
        return(
             
            <div>
                 <Link to='/addNewUser'>
                        <button type="button" style={btnStyle}>Add New</button>
                 </Link>
                 <div>
                   {this.state.userList.map(this.eachUser)}
                 </div>
             </div>

        );
    }

});

var CommentBox = React.createClass({
    getInitialState : function(){
        return ({editing :  false});
    },
    edit : function(){
        this.setState({editing : true});
    },
    save : function(){
        this.setState({editing : false});
        this.props.editUser(this.refs.cmtbox.value, this.props.index);
    },
    remove : function(){
       this.props.deleteUser(this.props.index);
    },
    renderTextbox : function(){
        return(
            <div>
                <textarea ref="cmtbox" defaultValue={this.props.comment} /><br/>
                <button type="button" onClick={this.save} style={{background:"#056905", marginRight:"5px", color:"#fff" ,border : "1px solid #056905",padding :"5px"}}>Save</button>
            </div>
        )
    },
    renderData : function(){
       return(
                <div>
                    <p>{this.props.comment} </p>
                    <button type="button" onClick={this.edit} style={{background:"#337AB7", marginRight:"5px", color:"#fff",border : "1px solid #337AB7",padding :"5px" }}>Edit</button>
                    <button type="button" onClick={this.remove} style={{background:"#C70B0B", marginRight:"5px" , color:"#fff" ,border : "1px solid #C70B0B",padding :"5px"}} >Remove</button>
                </div>
            )
    },
    render : function(){
      if(this.state.editing) {
         return this.renderTextbox();
      }else{
        return this.renderData();
      }
    }
});


var SubscribersList = React.createClass({
     render : function(){
        return(
            <div style={{margin:'20px'}}>
                <ProfileImage image={this.props.data.image} />
                <ProfileDetails name={this.props.data.name} location={this.props.data.location} />
                <CommentBox comment={this.props.data.comment} index={this.props.index}  deleteUser={this.props.deleteUser} editUser={this.props.editUser} />
                <hr/>
            </div>
        )
    }
})

var ProfileImage = React.createClass({
     render : function(){
        return(
            <div><img src={this.props.image} width='70' height='70'/></div>
        )
    }
});

var ProfileLink = React.createClass({
   changeURL : function(){
            window.location.href = this.props.href;
    },
    render : function(){
        return (
            <span onClick={this.changeURL} style={{fontWeight:'bold',color:'blue',cursor:'pointer'}}>
            {this.props.children}
            </span>
        )
    }
});

 var ProfileDetails = React.createClass({
     render : function(){
        return(
            <div>
                <ProfileLink href={'http://facebook.com/' + this.props.name }> {this.props.name}</ProfileLink>
                <br></br>{this.props.location}
            </div>
        )
    }
});
 
module.exports = UserList;
