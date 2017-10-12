import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Common/Nav/NavMain';
import HomeMain from './components/Home/HomeMain';
import PortfolioMain from './components/Portfolio/PortfolioMain';
import AdminMain from './components/Admin/AdminMain';
// import Login from './components/Admin/Login';
// import Dashboard from './components/Admin/Dashboard';
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

        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        authAPI.getCurrentUser().then(currentuser => {
            if (currentuser.data) {
                this.changeLoggedInState();
            }
        });
    }

    changeLoggedInState = () => {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
        }));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = event => {

        // console.log(window.scrollY);
        // document.documentElement.scrollTop

        if (window.scrollY > 150) {
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

        if (window.scrollY > 950) {
            // toggle state for front end skills
            if (!this.state.menu1Check) {
                this.setState((prevState, props) => ({
                    menu1Check: !prevState.menu1Check
                }));
            }
        }

        if (window.scrollY > 1300) {
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
                            <AdminMain isLoggedIn={this.state.isLoggedIn} changeLoggedInState={this.changeLoggedInState} />
                            // this.state.isLoggedIn ? <Dashboard/> : <Login isLoggedIn={this.state.isLoggedIn}/>
                        )}/>
                    </div>
                </Router>
                <Footer links={this.navLinks} />
            </div>
        );
    }
}

export default App;
