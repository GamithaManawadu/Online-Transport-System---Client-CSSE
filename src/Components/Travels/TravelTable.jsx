import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(date, from, to, busid, distance, amount) {
    return { date, from, to, busid, distance, amount };
}


export default function BasicTable(props) {
    const classes = useStyles();

    const getRows = () => {

        let rows = []
        props.travels.map(t => {
            rows.push(createData(t.date,t.from,t.to,t.busid,t.distance,t.amount))
        })
        return rows;
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>To</TableCell>
                        <TableCell>From</TableCell>
                        <TableCell>Bus No</TableCell>
                        <TableCell>Distance(km)</TableCell>
                        <TableCell>Amount(Rs)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getRows().map((row) => (
                        <TableRow key={row.date}>
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell>{row.from}</TableCell>
                            <TableCell>{row.to}</TableCell>
                            <TableCell>{row.busid}</TableCell>
                            <TableCell>{row.distance}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
