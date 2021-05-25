import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'state', label: 'State', minWidth: 50 },
  { id: 'confirmed', label: 'Confirmed', minWidth: 50 },
  {
    id: 'active',
    label: 'Active',
    minWidth: 20,
  },
  {
    id: 'recovered',
    label: 'Recovered',
    minWidth: 50,
  },
  {
    id: 'deaths',
    label: 'Deaths',
    minWidth: 50,
  },
  // {
  //   id: 'updated',
  //   label: 'Updated',
  //   minWidth: 50,
  // },
];


const useStyles = makeStyles({
  table: {
      maxWidth: 1000,
  },
  root: {
    width: '100%',
  },
  head: {
     backgroundColor: "#222222",
     color: '#fff',
     fontSize: 20,
  },
  body: {
      fontSize: 5,
      color: '#fff',
  },
});



function StateWise() {
    const classes = useStyles();

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise)
    }

    useEffect(() => {
            getCovidData();
    }, [])

    return (
        <div className="schedules" align="center">
            <div className={classes.root}>
            <TableContainer>
                <Table stickyHeader className={classes.table} aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        className={classes.head}
                        key={column.id}
                        align="center"
                        style={{ minWidth: column.minWidth }}
                        bold
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((curElem, index) => (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell className={classes.head} align="left">{curElem.state}</TableCell>
                            <TableCell className={classes.head} align="right">{curElem.confirmed}(<span style={{color: "#e6e600"}}>{"+"}{curElem.deltaconfirmed}</span>)</TableCell>
                            <TableCell className={classes.head} align="right">{curElem.active}</TableCell>
                            <TableCell className={classes.head} align="right">{curElem.recovered}(<span style={{color: "#00e600"}}>{"+"}{curElem.deltarecovered}</span>)</TableCell>
                            <TableCell className={classes.head} align="right">{curElem.deaths}(<span style={{color: "#e60000"}}>{"+"}{curElem.deltadeaths}</span>)</TableCell>
                            {/* <TableCell className={classes.head} align="center">{curElem.lastupdatedtime}</TableCell> */}
                        </TableRow>
                    ))}

                </TableBody>
                </Table>
            </TableContainer>

            </div> 
        </div>
        


       
        
    )
}

export default StateWise
