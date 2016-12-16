import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App.js'
import CoursesPage from './components/course/CoursesPage.js';

export default (
<Route path='/' component={App}>
    <IndexRoute component={CoursesPage} />
    <Route path='courses' component={CoursesPage} />
</Route>
)