import React from 'react';
import Jumbotron from '../../Common/Jumbotron';
import './Login.css';

const Login = props => {
    return (
        <div>
            <Jumbotron bg={'url(assets/images/admin_bg.jpg)'} page={'login'} />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 ml-md-auto mr-md-auto'>
                        <form className='login-form' action='/' method='post'>
                            <div className="form-group">
                                <label for="login-email">Email address</label>
                                <input type="email" className="form-control" id="login-email" aria-describedby="emailHelp" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label for="login-password">Password</label>
                                <input type="password" className="form-control" id="login-password" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary login-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
