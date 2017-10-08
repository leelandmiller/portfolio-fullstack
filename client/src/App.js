import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Common/Nav/NavMain';
import HomeMain from './components/Home/HomeMain';
import Footer from './components/Common/Footer';

class App extends Component {

    state = {
        // set state here
        navIsTransparent: true,
        menu1Check: false,
        menu2Check: false
    }

    navLinks = [
        { 'name': 'About', 'url': '/' },
        { 'name': 'Work', 'url': '/' },
        { 'name': 'Contact', 'url': '/' },
    ]

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
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
                    <Route exact path='/' render={() => (
                        <HomeMain
                            navIsTransparent={this.state.navIsTransparent}
                            menu1Check={this.state.menu1Check}
                            menu2Check={this.state.menu2Check}
                        />
                    )}/>
                </Router>
                <Footer links={this.navLinks} />
            </div>
        );
    }
}

export default App;
