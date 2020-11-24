//import statements
import React, { Component } from 'react';
import './App.css';
import { Grid, TextField, Button } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';


export class Login extends Component {
    //saving user inputs in local storage (can be checked on browser console)
    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const user = rememberMe ? localStorage.getItem('user') : '';
        this.setState({ user, rememberMe });
    }
    state = {
        username: '',
        pass: '',
        rememberMe: false
    }
    handleChange = (e) => {
        const input = e.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({
            [e.target.name]: e.target.value,
            [input.name]: value

        });

        console.log("hello, ", e.target.value)
    };

    handleFormSubmit = () => {
        const { user, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user : '');
    };

    render() {

        return (
            //creating user ui form
            <form onSubmit={this.handleFormSubmit}>
                <div>

                    {/* //desgining ui: dividing page in two parts */}

                    <Grid container style={{ minHeight: '100vh' }}>
                        <Grid item xs={12} sm={6}>
                            {/* left side image */}
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                alt="" />
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            sm={6}
                            alignItems='center'
                            direction='column'
                            justify="space-between"

                            style={{ padding: 20, paddingTop: 40 }}
                        >
                            {/* right side components in flex */}
                            <div style={{ display: 'flex', flexDirection: "column", maxWidth: 400, minWidth: 300 }}>
                                <Grid container justify="center">
                                    <img src="https://dynamic.brandcrowd.com/asset/logo/bf099eae-01b4-4a27-a6aa-80d1e30ad164/logo?v=4"
                                        width={200}
                                        alt="logo" />

                                </Grid>
                                <TextField name="username" value={this.state.username} onChange={this.handleChange} label="Username" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start" > <AccountCircle /> </InputAdornment> }} />
                                <TextField name='pass' value={this.state.pass} onChange={this.handleChange} label="Password" margin="normal" type="password" InputProps={{ startAdornment: <InputAdornment position="start" > <LockRounded /> </InputAdornment> }} />
                                <div style={{ height: 20 }} />
                                <Button color="primary" variant="contained" href="/Welcome">
                                    LOG IN
                    </Button>
                                <label>
                                    <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /> Remember me
      </label>
                                <div style={{ height: 20 }} />

                                <Button href="/SignUp">
                                    Interested in joining?
                            </Button>


                            </div>
                            <div>
                                <Grid container justify="center" spacing={2}>
                                    <Grid item>
                                        <Button color="primary" >Go to community page</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" >Forgot password?</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </form>

        );

    }
}
export default Login;