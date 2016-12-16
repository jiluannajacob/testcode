import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return(
    <div>
         <IndexLink to='/'  activeClassName="active">Home</IndexLink>
            <link to='/courses' activeClassName="active">Courses</link>
    </div>
    )
}