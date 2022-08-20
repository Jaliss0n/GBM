import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";
import axios from "axios";
import authorization from "../authorization";
import { Button, Link, Typography } from "@mui/material";
import Pesagens from "./Pesagens";
import '../components_css/TableVagoes.css'


export default function TableVagoes() {

    const [showLinks, setShowLinks] = useState(false)

    const showItems = () => {
        setShowLinks(!showLinks)
    }


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


    function formatDate(date) {
        const dateAux = new Date(date);

        return dateAux.getDate() + '/' + (dateAux.getMonth() + 1) + '/' + dateAux.getFullYear()
            + " " + dateAux.getHours() + ":" + dateAux.getMinutes();
    }



    const pesso = dado.map(dados => parseInt(dados.weight))
    const total = pesso.reduce((acc, numero) => acc + numero, 0)

    return (


        <div>

            <div id='header-title-body'>
                <h2>Vagões Cadastrados</h2>
                <Button variant="contained" onClick={showItems} color='secondary'>Buscar Vagões API</Button>

            </div>

            {showLinks ? (
                <div id='minhaDiv'>

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
                            {dado.map((dados) => (
                                <TableRow
                                    key={dados.downloadStartTime}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell >{dados.plate}</TableCell>
                                    <TableCell >{dados.railroad}</TableCell>
                                    <TableCell >{dados.product}</TableCell>
                                    <TableCell >{formatDate(dados.downloadStartTime)}</TableCell>
                                    <TableCell >{formatDate(dados.downloadEndTime)}</TableCell>
                                    <TableCell >{parseFloat(dados.weight).toLocaleString(2)}</TableCell>
                                </TableRow>
                            ))}


                        </TableBody>
                    </Table>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '88%' }}>
                        <Typography textAlign='right' sx={{ paddingRight: '130px' }} ><strong>TOTAL</strong></Typography>
                        {total.toLocaleString(2)}

                    </div>

                    <div id='header-title-Vagoes'>
                        <h2>Resumo de pesagens</h2>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                        <Pesagens titulo="SOJA" empresa_1='RUMO' empresa_2='MRS' empresa_3='VLI' produto='Soja' />
                        <Pesagens titulo="MILHO" empresa_1='RUMO' empresa_2='MRS' empresa_3='VLI' produto='Milho' />
                        <Pesagens titulo="TOTAL" empresa_1='RUMO' empresa_2='MRS' empresa_3='VLI' produto={false} />
                    </div>

                </div>


            ) : null}

        </div>
    )
}