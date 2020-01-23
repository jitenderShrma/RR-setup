import React, { Component } from "react";
import { Field, reduxForm} from 'redux-form';
import {compose} from 'recompose';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Button, Grid, Link, Fade, Avatar, Typography, FormControlLabel } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { renderTextField } from 'components/Form';

// const useStyles = (makeStyles(theme => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//     },
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// })))();
const enhancer = compose(
    reduxForm({
        form:'login'
    })
);

function Login({openSignin:openSignin, classes:classes, setOpenSignin:setOpenSignin, setOpenSignup:setOpenSignup}) {
    console.log('classes', classes)
    return(
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
                <form className={classes.form} >
                    {/* <TextField
                        variant="outlined"
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
                        name="email"
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
                        name="loginPassword"
                        component={renderTextField}
                        label="Password"
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
                        Sign In</Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
      </Link>
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
    )
}
export default enhancer(Login);
// export default class extends Component {
//     render() {
//         console.log('classes', this.props);
//         const classes={};
//         const {setOpenSignin, openSignin, setOpenSignup } = this.props;
//         console.log('setOpenSignin', setOpenSignin, openSignin, setOpenSignup)
//         return (
            // <Modal
            //     aria-labelledby="transition-modal-title"
            //     aria-describedby="transition-modal-description"
            //     className={classes.modal}
            //     open={openSignin}
            //     // onClick={() => { setOpenSignin(false) }}
            //     closeAfterTransition
            //     BackdropComponent={Backdrop}
            //     BackdropProps={{
            //         timeout: 500,
            //     }}
            // >
            //     <Fade in={openSignin}>
            //         <div className={classes.paper}>
            //             <Avatar className={classes.avatar} className="MuiAvatar-root-custom">
            //                 <LockOutlinedIcon />
            //             </Avatar>
            //             <Typography component="h1" variant="h5" className="center-align">
            //                 Sign in
            //             </Typography>
            //             <form className={classes.form} >
            //                 {/* <TextField
            //                     variant="outlined"
            //                     margin="normal"
            //                     required
            //                     fullWidth
            //                     id="email"
            //                     label="Email Address"
            //                     name="email"
            //                     autoComplete="email"
            //                     autoFocus
            //                 /> */}

            //                 <Field
            //                     name="email"
            //                     component={renderTextField}
            //                     label="Email"
            //                     variant="outlined"
            //                     margin="normal"
            //                     required
            //                     fullWidth
            //                 />

            //                 {/* <TextField
            //                     variant="outlined"
            //                     margin="normal"
            //                     required
            //                     fullWidth
            //                     name="password"
            //                     label="Password"
            //                     type="password"
            //                     id="password"
            //                     autoComplete="current-password"
            //                 /> */}
            //                 <Field
            //                     name="loginPassword"
            //                     component={renderTextField}
            //                     label="Password"
            //                     variant="outlined"
            //                     margin="normal"
            //                     required
            //                     fullWidth
            //                 />

            //                 {/* <FormControlLabel
            //                     control={<Checkbox value="remember" color="primary" />}
            //                     label="Remember me"
            //                 /> */}
            //                 <Button
            //                     type="submit"
            //                     fullWidth
            //                     variant="contained"
            //                     color="primary"
            //                     className={classes.submit}
            //                 >
            //                     Sign In</Button>
            //                 <Grid container>
            //                     <Grid item xs>
            //                         <Link href="#" variant="body2">
            //                             Forgot password?
            //   </Link>
            //                     </Grid>
            //                     <Grid item>
            //                         <Link href="#" variant="body2" onClick={() => { setOpenSignin(false); setOpenSignup(true) }}>
            //                             {"Don't have an account? Sign Up"}
            //                         </Link>
            //                     </Grid>
            //                 </Grid>
            //             </form>
            //         </div>
            //     </Fade>
            // </Modal>
//         )
//     }
// };