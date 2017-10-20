import React, { Component } from 'react';
import authAPI from '../../../utils/authAPI';
import './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = event => {
        const val = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: val
        });
    }

    handleBubmit = event => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        authAPI.loginUser(user.email, user.password).then(newUser => {
            // window.location = '/admin';
            this.props.changeLoggedInState();
        });
    }

    render() {
        return (
            <div>
                {/* <Jumbotron bg={'url(assets/images/admin_bg.jpg)'} page={'login'} /> */}
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 ml-md-auto mr-md-auto'>
                            <div className='login-form'>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="login-email">Email address</label>
                                        <input type='email' name='email' value={this.state.email} className="form-control" id="login-email" aria-describedby="emailHelp" placeholder="Email" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="login-password">Password</label>
                                        <input type='password' name='password' value={this.state.password} className="form-control" id="login-password" placeholder="Password" onChange={this.handleChange}/>
                                    </div>
                                    <button onClick={this.handleBubmit} type="submit" className="btn btn-primary login-submit-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
