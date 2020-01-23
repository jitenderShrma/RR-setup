import React from 'react';
import { Modal, Backdrop, Button, Grid, Link, Fade, Avatar, Typography, FormControlLabel } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { renderTextField as TextField } from 'components/Form';
import useStyles from './style';

function LoginModal({ setOpenSignup, onChange, state, onLogin, setCloseSignin, errors }) {
    const classes = useStyles();
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={state.openSignin}
            // onClick={setCloseSignin}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={state.openSignin}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} className="MuiAvatar-root-custom">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className="center-align">
                        Sign in
            </Typography>
                    <form className={classes.form} onSubmit={onLogin}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="loginEmail"
                            value={state.loginEmail}
                            autoComplete="email"
                            autoFocus
                            error={errors.email}
                            helperText={errors.email}
                            onChange={onChange}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="loginPassword"
                            value={state.loginPassword}
                            onChange={onChange}
                            label="Password"
                            type="password"
                            id="password"
                            error={errors.password}
                            helperText={errors.password}
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
                                <Link href="#" variant="body2" onClick={setOpenSignup}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Fade>
        </Modal>

    )
}
export default LoginModal;