import React, { Component } from "react";
import { Field} from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Button, Grid, Link, Fade, Avatar, Typography, FormControlLabel } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { renderTextField } from 'components/Form';

export default class Register extends Component {
    render(){
        const classes = {};
        const {setOpenSignin, setOpenSignup, openSignin, openSignup} = this.props;
        return (<Modal
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
                    <form className={classes.form}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {/* <TextField
                                label="Size"
                                id="outlined-size-small"
                                defaultValue="Small"
                                variant="outlined"
                                size="small"
                            />
                            <TextField
                                label="Size"
                                id="outlined-size-normal"
                                defaultValue="Normal"
                                variant="outlined"
                            /> */}
                            <Field
                                name="firstName"
                                component={renderTextField}
                                label="FirstName"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                            />
                            <Field
                                name="lastName"
                                component={renderTextField}
                                label="LastName"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                            />
                        </div>

                        {/* <TextField
                            variant="outlined" TransitionsModal
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        /> */}
                        <Field
                            name="Email"
                            component={renderTextField}
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                        />

                        {/* <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        /> */}
                        <Field
                            name="password"
                            component={renderTextField}
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                        />
                        <Field
                            name="conformPassword"
                            component={renderTextField}
                            label="Conform Password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
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
        </Modal>)
    }
}