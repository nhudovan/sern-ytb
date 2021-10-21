import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import {handleLogin} from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: '',
            isShowPassword: false,
        }
       
    }

    handleLogin = async (event) => {
         console.log(this.state.username,this.state.password);
         try {
            await handleLogin(this.state.username,this.state.password);
         } catch (error) {
             console.log(error)
         }
        

        
    }

    handleShowHidePassword = (event) =>{
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }


    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12  text-login">Login</div>

                        <div className="col-12 form-group login-input">
                            <label>User Name :</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your user name"
                            value={this.state.username}
                            onChange={(e)=>this.setState(old=>({...old,username:e.target.value}))}
                            />
                        </div>

                        <div className="col-12 form-group login-input">
                            <label>Password :</label>
                            <div className="custom-input-password">
                            <input
                            type={this.state.isShowPassword ? 'text' : 'password'} 
                            className="form-control" 
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={(e)=>this.setState(old=>({...old,password:e.target.value}))}
                            />
                            <span onClick={(e)=>this.handleShowHidePassword()} >
                                <i  class={this.state.isShowPassword ? 'far fa-eye':'far fa-eye-slash'}></i>
                            </span>
                            
                            </div>
                            
                        </div>
                        <div className="col-12">
                                <button 
                                className="btn-login"
                                onClick={()=>{this.handleLogin()}}
                                >Log in
                                </button>
                        </div>
                        
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password ?</span> 
                        </div>

                        <div className="col-12 text-center mt-3">
                            <span className="text-other-login">Or Sign In With:</span>
                        </div>
                        <div className="col-12 social-login">
                        <i className="fab fa-google-plus-g google"></i>
                        <i class="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
