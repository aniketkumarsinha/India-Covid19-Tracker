import React, {useState, useEffect}  from 'react';
import './TotalData.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
    flexGrow: 1,
  },
});

export default function TotalData() {
  const classes = useStyles();

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise[0])
    }

    useEffect(() => {
            getCovidData();
    }, [])

  return (
    <div className="totalData">      
        <Grid container align="center" spacing={1}>
            <Grid item xs={12} sm={6} lg={3} md={3}>
                <Card style={{backgroundColor: "#e6e600"}} className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h3">
                    Total
                    </Typography>
                    <Typography variant="h4">
                    {data.confirmed}
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} lg={3} md={3}>
                <Card style={{backgroundColor: "#ffa500"}} className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h3">
                    Active
                    </Typography>
                    <Typography variant="h4">
                    {data.active}
                    </Typography>
                </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={3} md={3}>
                <Card style={{backgroundColor: "#00e600"}} className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h3">
                    Recovered
                    </Typography>
                    <Typography variant="h4">
                    {data.recovered}
                    </Typography>
                </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={3} md={3}>
                <Card style={{backgroundColor: "#e60000"}} className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h3">
                    Deaths
                    </Typography>
                    <Typography variant="h4">
                    {data.deaths}
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}
