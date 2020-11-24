//import statements
import './App.css';
import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';

//sign up page
export class SignUp extends Component {
  render() {

    return (
      // same designing as login page
      <div>
        <Grid container style={{ minHeight: '100vh' }}>
          <Grid item xs={12} sm={6}>
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

            <div style={{ display: 'flex', flexDirection: "column", maxWidth: 400, minWidth: 300 }}>
              <Grid container justify="center">
                <img src="https://dynamic.brandcrowd.com/asset/logo/bf099eae-01b4-4a27-a6aa-80d1e30ad164/logo?v=4"
                  width={200}
                  alt="logo">
                </img>
              </Grid>
              <TextField label="Username" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start" > <AccountCircle /> </InputAdornment> }} />
              <TextField label="Password" margin="normal" type="password" InputProps={{ startAdornment: <InputAdornment position="start" > <LockRounded /> </InputAdornment> }} />
              <TextField label="Confirm Password" margin="normal" type="password" InputProps={{ startAdornment: <InputAdornment position="start" > <LockRounded /> </InputAdornment> }} />
              <div style={{ height: 20 }} />
              <Button color="primary" variant="contained" href="/Login">
                SIGN UP
                </Button>
              <div style={{ height: 20 }} />



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


    );

  }
}

export default SignUp;
