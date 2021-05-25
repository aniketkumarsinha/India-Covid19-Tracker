import React, {useState, useEffect}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 500,
    backgroundColor: '#222222',
    color: '#fff',
  },
});

export default function TodayTotal() {
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
    <div className="todayTotal">    
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <h2>
                        Today's Stats
                        </h2>
                        <p align="left">
                        New Cases: {" "}{data.deltaconfirmed}
                        </p>
                        <p align="left">
                        Recovered: {" "}{data.deltarecovered}
                        </p>
                        <p align="left">
                        Deaths: {" "}{data.deltadeaths}
                        </p>
                    </CardContent>
                </Card>
    </div>
  );
}
