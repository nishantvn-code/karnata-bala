import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';  
import Header from './components/partials/header';
import Footer from './components/partials/footer';
import Home from './components/home/home';
import News from './components/news/news';
import Gallery from './components/gallery/gallery';
import Blog from './components/blog/blog';

const Routes = () => (
<Router>
    <Header />
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/news' component={News} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/blog' component={Blog} />
    </Switch>
    <Footer />
</Router>
)
export default Routes;