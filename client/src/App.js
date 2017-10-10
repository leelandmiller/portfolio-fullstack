import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Common/Nav/NavMain';
import HomeMain from './components/Home/HomeMain';
import PortfolioMain from './components/Portfolio/PortfolioMain';
import Login from './components/Admin/Login';
import Dashboard from './components/Admin/Dashboard';
import Footer from './components/Common/Footer';

import authAPI from './utils/authAPI';

class App extends Component {

    state = {
        // set state here
        navIsTransparent: true,
        menu1Check: false,
        menu2Check: false,
        isLoggedIn: false
    }

    navLinks = [
        { 'name': 'About', 'url': '/' },
        { 'name': 'Work', 'url': '/work' },
        { 'name': 'Contact', 'url': '/' },
    ]

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        authAPI.getCurrentUser().then(currentuser => {
            console.log(currentuser);

            if (currentuser.data) {
                this.setState({
                    isLoggedIn: true
                });
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = event => {

        if (document.documentElement.scrollTop > 150) {
            // toggle state for nav
            if (this.state.navIsTransparent) {
                this.setState((prevState, props) => ({
                    navIsTransparent: !prevState.navIsTransparent
                }));
            }

        } else {
            // toggle state for nav
            if (!this.state.navIsTransparent) {
                this.setState((prevState, props) => ({
                    navIsTransparent: !prevState.navIsTransparent
                }));
            }
        }

        if (document.documentElement.scrollTop > 950) {
            // toggle state for front end skills
            if (!this.state.menu1Check) {
                this.setState((prevState, props) => ({
                    menu1Check: !prevState.menu1Check
                }));
            }
        }

        if (document.documentElement.scrollTop > 1300) {
            // toggle state for back end skills
            if (!this.state.menu2Check) {
                this.setState((prevState, props) => ({
                    menu2Check: !prevState.menu2Check
                }));
            }
        }
    }

    render() {
        return (
            <div>
                <Nav isTransparent={this.state.navIsTransparent} links={this.navLinks} />
                <Router>
                    <div>
                        <Route exact path='/' render={() => (
                            <HomeMain
                                navIsTransparent={this.state.navIsTransparent}
                                menu1Check={this.state.menu1Check}
                                menu2Check={this.state.menu2Check}
                            />
                        )}/>
                        <Route exact path='/work' render={() => (
                            <PortfolioMain />
                        )}/>
                        <Route exact path='/admin' render={() => (
                            this.state.isLoggedIn ? <Dashboard/> : <Login/>
                        )}/>
                    </div>
                </Router>
                <Footer links={this.navLinks} />
            </div>
        );
    }
}

export default App;
