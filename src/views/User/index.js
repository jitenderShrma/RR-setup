import React from 'react';
import { connect } from 'react-redux';
import { compose} from 'recompose';
import LoginModal from './Login';
import RegisterModal from './Register';

// actions
import {loginUser, registerUser} from '../../redux/actions/authAction';
import {clearError} from '../../redux/actions/errorAction';

class Auth extends React.Component {
    constructor(){
        super();
        this.state = {
            openSignin: true,
            openSignup: false,
            firstName: '',
            lastName: '',
            loginEmail: '',
            loginPassword: '',
            registerEmail: '',
            registerPassword:'',
            conformPassword:'',
        }
    }
    setOpenSignin = () => {
        this.setState(preState => ({openSignin: true, openSignup: false}));
        // clear error action
        this.props.clearError();
    }
    setCloseSignin = () => {
        this.setState({openSignin: false});
    }
    setOpenSignup = () => {
        this.setState(preState => ({openSignin: false, openSignup: true})); 
        // clear error action
        this.props.clearError();
    }
    setCloseSignup = () => {
        this.setState({openSignup: false})
    }
    onLogin = (e) => {
        // call action
        this.props.loginUser({email:this.state.loginEmail, password: this.state.loginPassword});
        e.preventDefault();
    }
    onRegister = (e) => {
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.registerEmail,
            password: this.state.registerPassword,
            conformPassword: this.state.conformPassword
        }
        // call register action
        this.props.registerUser(newUser);
        e.preventDefault();
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        return (
            <div>
                <LoginModal onChange={this.onChange} onLogin={this.onLogin} state={this.state} setOpenSignup={this.setOpenSignup} setCloseSignin={this.setCloseSignin} errors={this.props.errors}/>
                <RegisterModal  setOpenSignin={this.setOpenSignin} state={this.state} onChange={this.onChange} onRegister={this.onRegister} setCloseSignup={this.setCloseSignup} errors={this.props.errors}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
});
const enhancer = compose(
    connect(mapStateToProps, {loginUser, registerUser, clearError})
);
export default enhancer(Auth);