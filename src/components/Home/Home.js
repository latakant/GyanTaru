import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import "./Home.css"

/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));*/

export default function Home() {
  return (
    
    <div className="container-fluid">

{/* <div className="container"> */}
  <div className="row justify-content-start">
    <div className="col-6">
      One of two columns
    </div>
    <div className="col-6">
      One of two columns
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-4">
      One of two columns
    </div>
    <div className="col-4">
      One of two columns
    </div>
  </div>
  <div className="row justify-content-end">
    <div className="col-4">
      One of two columns
    </div>
    <div className="col-4">
      One of two columns
    </div>
  </div>
  <div className="row justify-content-around">
    <div className="col-4">
      One of two columns
    </div>
    <div className="col-4">
      One of two columns
    </div>
  </div>
  <div className="row justify-content-between">
    <div className="col-4">
      One of two columns
    </div>
    <div className="col-4">
      One of two columns
    </div>
  </div>
  <div className="row justify-content-evenly">
    <div className="col-4">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.91068750285!2d77.71902310208215!3d12.964566915063632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f35d0dfc83%3A0x30cfa512d80115f9!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650304371211!5m2!1sen!2sin" style={{width: '100%', height:'100%'}}></iframe>
    </div>
    <div className="col-4">
      One of two columns
    </div>
  </div>
  
</div>



  );
}
