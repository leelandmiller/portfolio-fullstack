import React, { Component } from 'react';
import Jumbotron from '../../Common/Jumbotron';
import Login from '../Login';
import Dashboard from '../Dashboard';

class AdminMain extends Component {

    dashboard = () => {
        let { isLoggedIn } = this.props;

        if (isLoggedIn) {
            return (
                <Dashboard />
            );
        } else {
            return (
                <Login changeLoggedInState={this.props.changeLoggedInState} />
            );
        }
    }

    render() {
        return (
            <div>
                <Jumbotron bg={'url(assets/images/admin_bg.jpg)'} page={'dashboard'} />
                {this.dashboard()}
            </div>
        );
    }
}

export default AdminMain;
