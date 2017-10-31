import React, { Component } from 'react';
import Jumbotron from '../../Common/Jumbotron';
import Login from '../Login';
import DashMain from '../Dashboard/DashMain';
import './AdminMain.css';

class AdminMain extends Component {

    dashboard = () => {
        let { isLoggedIn } = this.props;
        if (isLoggedIn) {
            return (
                <DashMain />
            );
        } else {
            return (
                <Login changeLoggedInState={this.props.changeLoggedInState} />
            );
        }
    }

    render() {
        return (
            <div className='footer-space'>
                <Jumbotron bg={'url(assets/images/admin_bg.jpg)'} page={this.props.isLoggedIn ? 'dashboard' : 'login'} />
                {this.dashboard()}
            </div>
        );
    }
}

export default AdminMain;
