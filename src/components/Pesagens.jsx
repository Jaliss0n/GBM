import { Table, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import TableBody from '@mui/material/TableBody';
import React from "react";
import '../components_css/Pesagens.css'

export default function Pesagens(props) {


    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData(2173, 159, 6.0, 24, 4.0),
    ];

    return (
        <div id='table-pesagens'>
            <Typography align="center" variant="h5">{props.titulo}</Typography>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell><Typography variant='h6'>RUMO</Typography></TableCell>
                        <TableCell><Typography variant='h6'>MRS</Typography></TableCell>
                        <TableCell><Typography variant='h6'>VLI</Typography></TableCell>
                        <TableCell><Typography variant='h6'><strong>TOTAL</strong></Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell >{row.calories}</TableCell>
                            <TableCell >{row.fat}</TableCell>
                            <TableCell ><strong>{row.carbs}</strong></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}