import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { Field, reduxForm, formValues } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Button, Grid, Link, Fade, Avatar, Typography, FormControlLabel } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { renderTextField as TextField } from 'components/Form';
import validate from '../../common/validators';
import asyncValidate from '../../common/asyncValidate';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const mapStateToProps = state => ({
    errors: state.errors
});
const enhancer = compose(
    reduxForm({
        form: 'auth',
        validate,
        asyncValidate
    }),
    withHandlers({
        handleSubmit: p => e => {
            // const formValues = formValueSelector('auth');
            // console.log(formValues(''));
            e.preventDefault();
        }
    }),
    connect(mapStateToProps, {}),
    lifecycle({
        componentWillReceiveProps(nextProps){
            console.log('nextProps recive', this,);
            // this.setState({openSignin: false})
        }
    })
);


function AuthModal({ handleSubmit, errors }) {
    const classes = useStyles();
    const [openSignin, setOpenSignin] = React.useState(true);
    const [openSignup, setOpenSignup] = React.useState(false);
    const [user, setState] = React.useState({
        loginEmail: "",
        loginPassword: "",
        firstName: '',
        lastName: '',
        password: '',
        password2: ''
    });
    return (
        <div>
            {/* <button type="button" onClick={setOpenSignin}>
                react-transition-group
      </button> */}

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openSignin}
                // onClick={() => { setOpenSignin(false) }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openSignin}>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar} className="MuiAvatar-root-custom">
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" className="center-align">
                            Sign in
                        </Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="loginEmail"
                                autoComplete="email"
                                autoFocus
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="loginPassword"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In</Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?</Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2" onClick={() => { setOpenSignin(false); setOpenSignup(true) }}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openSignup}
                onClose={() => setOpenSignup(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openSignup}>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar} className="MuiAvatar-root-custom">
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" className="center-align">
                            Sign Up
                        </Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TextField
                                    label="First Name"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="firstName"
                                    label="First Name"
                                    type="text"
                                    value={user.firstName}
                                    onChange={(e) => {
                                        setState({ [`user.${e.target.name}`]: e.target.value });
                                        console.log(user);
                                    }}
                                // autoComplete="current-password"
                                />
                                <TextField
                                    label="Last Name"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="lastName"
                                    label="Last Name"
                                    type="text"
                                    value={user.lastName}
                                    onChange={(e) => {
                                        setState({ [user[e.target.name]]: e.target.value });
                                    }}
                                />
                            </div>

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="conformPassword"
                                label="Conform Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up</Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
              </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" onClick={() => { setOpenSignin(true); setOpenSignup(false) }} variant="body2">
                                        {"Don't have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
export default enhancer(AuthModal);




