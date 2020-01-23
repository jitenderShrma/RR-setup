import React from 'react';
import { Modal, Backdrop, Button, Grid, Link, Fade, Avatar, Typography, FormControlLabel } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { renderTextField as TextField } from 'components/Form';
import useStyle from './style';

function RegisterModal({state, onChange, setOpenSignin, onRegister, setCloseSignup, errors}){
    const classes = useStyle();
    return(
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={state.openSignup}
        // onClick={setCloseSignup}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
    >
        <Fade in={state.openSignup}>
            <div className={classes.paper}>
                <Avatar className={classes.avatar} className="MuiAvatar-root-custom">
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" className="center-align">
                    Sign Up
                </Typography>
                <form className={classes.form} onSubmit={onRegister}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            margin="normal"

                            fullWidth
                            name="firstName"
                            label="First Name"
                            type="text"
                            value={state.firstName}
                            onChange={onChange}
                            error={errors.firstName}
                            helperText={errors.firstName}
                        // autoComplete="current-password"
                        />
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            margin="normal"

                            fullWidth
                            name="lastName"
                            label="Last Name"
                            type="text"
                            value={state.lastName}
                            error={errors.lastName}
                            helperText={errors.lastName}
                            onChange={onChange}
                        />
                    </div>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="registerEmail"
                        value={state.registerEmail}
                        onChange={onChange}
                        autoComplete="email"
                        error={errors.email}
                        helperText={errors.email}
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="registerPassword"
                        value={state.registerPassword}
                        onChange={onChange}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={errors.password}
                        helperText={errors.password}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="conformPassword"
                        value={state.conformPassword}
                        onChange={onChange}
                        label="Conform Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={errors.conformPassword}
                        helperText={errors.conformPassword}
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
                            <Link href="#" onClick={setOpenSignin} variant="body2">
                                {"Don't have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Fade>
    </Modal>
    )
}
export default RegisterModal;