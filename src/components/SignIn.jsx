import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Appointment from './Appointment';

const SignIn = () => {
  const navigate=useNavigate();
  const handleSubmit =async (e) => {
    try {
      e.preventDefault();
    const username = e.target.username.value; 
  const password = e.target.password.value; 
  const response = await axios.post('http://localhost:3001/api/login', {
    userName: username,
    password: password,
  });
  const token = response.data.token;
  localStorage.setItem('token', token);
  navigate('/appointment');

    } catch (error) {
      
    }
    
  
    
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={require("./logo.png")} alt="Pic Not found"  width="30%" height="30%"/>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" component="div" sx={{ textAlign: 'left' }}>
            Username
          </Typography>
          <TextField
            fullWidth
            label="Enter your username"
            variant="outlined"
            name="username"
            margin="normal"
            required
          />
          <Typography variant="h5" component="div" sx={{ textAlign: 'left' }}>
            Password
          </Typography>
          <TextField
            fullWidth
            label="Enter your password"
            type="password"
            variant="outlined"
            name="password"
            margin="normal"
            required
          />
          <Button type="submit" fullWidth variant="contained" color="success">
            Sign In
          </Button>
        </form>
      </div>
    </Grid>
  );
};

export default SignIn;
