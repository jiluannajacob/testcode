import React from 'react';
import connect from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.component{
    constructor(props){
        super(props);
        this.state = {
            course : {title : ""}
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        
    }
    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }
    onClickSave(){
       //this.props.dispatch(courseActions.createCourse(this.state.course));
        this.props.createCourse(this.state.course);
    }
    courseRow(course, index){
        return <div key={index}>{course.title}</div>
    }
    render(){
        return(
        <div>
          <h1>Courses</h1>
                {this.props.course.map(this.courseRow)}
          <h1>Add Course</h1>
          <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                
          <input type="submit" onClick={this.onClickSave} value="Save" />      
            
        </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        courses : state.courses // course in the reducer
    }
}

function mapdispatchToProps(dispatch){
    return {
        createCourse : (course) => dispatch(courseActions.createCourse(course));
       
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);