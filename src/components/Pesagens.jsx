import { Table, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import TableBody from '@mui/material/TableBody';
import React from "react";
import authorization from "../authorization";
import { useEffect, useState } from "react";
import axios from "axios";
import '../components_css/Pesagens.css'

export default function Pesagens(props) {


    const [dado, setDado] = useState([]);

    useEffect(() => {

        let axiosConfig = {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.get(`https://api.tot.apigbmtech.com/api/selective-process/wagons?${authorization}`
            , axiosConfig)
            .then(res => {
                setDado(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    function resPesagens(nome, produto) {

        const empresa = dado.filter(d => d.railroad === nome && d.product === produto)
        const pesso = empresa.map(dados => parseInt(dados.weight))
        const total = pesso.reduce((acc, numero) => acc + numero, 0)
        return total

    }

    function resTotal(produto_1) {
        const produto = dado.filter(d => d.product === produto_1)
        const pesso = produto.map(dados => parseInt(dados.weight))
        const total = pesso.reduce((acc, numero) => acc + numero, 0)
        return total
    }

    function resTotalS_M(produto_1, produto2) {
        const produto = dado.filter(d => d.product === produto_1 && d.product)
        const pesso = produto.map(dados => parseInt(dados.weight))
        const total = pesso.reduce((acc, numero) => acc + numero, 0)
        return total
    }

    const Teste = (props.produto === false) ? true : false



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
                    <TableRow>
                        <TableCell>
                            {Teste != true ? resPesagens(props.empresa_1, props.produto).toLocaleString(2) :
                                <div>{resPesagens(props.empresa_1, 'Soja').toLocaleString(2)}</div>}
                        </TableCell>

                        <TableCell >
                            {Teste != true ? resPesagens(props.empresa_2, props.produto).toLocaleString(2) :
                                <div>{resPesagens(props.empresa_2, 'Soja').toLocaleString(2)}</div>
                        }</TableCell>

                        <TableCell>
                            {Teste != true ? resPesagens(props.empresa_3, props.produto).toLocaleString(2) :
                                <div>{resPesagens(props.empresa_3, 'Milho').toLocaleString(2)}</div>
                        }</TableCell>

                        <TableCell >
                            {Teste != true ? resTotal(props.produto).toLocaleString(2) :
                                <div>{(resPesagens(props.empresa_1, 'Soja')
                                    + resPesagens(props.empresa_2, 'Soja')
                                    + resPesagens(props.empresa_3, 'Milho')).toLocaleString(2)}
                                </div>}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}