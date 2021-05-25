import React from 'react';
import StateWise from './StateWiseData/StateWise';
import TotalData from './TotalData/TotalData';
import TodayTotal from './TotalData/TodayTotal';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});



function Dashboard() {
  const classes = useStyles();
    


    return (
        <div>
            <Typography className="title" variant="h2">
                India Covid19 Tracker
            </Typography>


            <TotalData />
      
            <Grid container align="center" spacing={1}>
                <Grid item xs={12} lg={10} md={8}>
                <StateWise />
                </Grid>
                <Grid item xs={12} lg={2} md={4}>
                <TodayTotal />
                </Grid>
            </Grid>

            <Typography className="footer">
                Copyright © 2021 | Made by <a href="https://aniketkumarsinha.tech/" target="_blank">Aniket Kumar Sinha</a>
            </Typography>
        </div>
    )
}

export default Dashboard;
