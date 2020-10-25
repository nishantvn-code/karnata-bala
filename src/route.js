import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';  
import Header from './components/partials/header';
import Footer from './components/partials/footer';
import Home from './components/home/home';
import News from './components/news/news';
import Gallery from './components/gallery/gallery';
import Blog from './components/blog/blog';
import NewsDetails from './components/news/news-details';
import AboutUs from './components/about/about-us';
const Routes = () => (
<Router>
    <Header />
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/news' exact component={News} />
        <Route path='/gallery' exact component={Gallery} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/newsdetails/:id' exact component={NewsDetails} />
        <Route path="/aboutus" exact component={AboutUs} />
    </Switch>
    <Footer />
</Router>
)
export default Routes;