import React        from 'react';
import { BrowserRouter, Link, NavLink, Route, Router, Switch } from 'react-router-dom';
import About        from '../components/about';
import Add          from '../components/add';
import Home         from '../components/home';
import Edit         from '../components/edit';
import Header       from '../components/header';
import Help         from '../components/help';
import NotFound     from '../components/404';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add" component={Add} />
                <Route path="/edit/:id" component={Edit} />
                <Route path="/about" component={About} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;