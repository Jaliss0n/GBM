import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function TableVagoes(props) {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <div>
            <Table sx={{ minWidth: 500, height: '40vh' }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell ><h2>Placa</h2></TableCell>
                        <TableCell ><h2>Ferrovia</h2></TableCell>
                        <TableCell ><h2>Produto</h2></TableCell>
                        <TableCell ><h2>Data/Hora Início Desc.</h2></TableCell>
                        <TableCell ><h2>Data/Hora Fim Desc.</h2></TableCell>
                        <TableCell ><h2>Peso destino</h2></TableCell>
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
                            <TableCell >{row.carbs}</TableCell>
                            <TableCell >{row.protein}</TableCell>
                            <TableCell >{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}