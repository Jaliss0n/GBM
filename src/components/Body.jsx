import { Button, TextField } from "@mui/material";
import React from "react";
import '../components_css/Body.css'
import Pesagens from "./Pesagens";

import TableVagoes from "./TableVagoes";

export default function Body() {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div id='body-body'>
            <div id='header-title-body'>
                <h2>Vagões Cadastrados</h2>
                <Button variant="contained" color='secondary'>Buscar Vagões API</Button>
            </div>

            <div>
                <TableVagoes />
            </div>

            <div id='header-title-body'>
                <h2>Resumo de pesagens</h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                <Pesagens titulo="SOJA" />
                <Pesagens titulo="MILHO" />
                <Pesagens titulo="TOTAL" />
            </div>

            <div id='observ-body'>
                <h2>Observações</h2>
                <Button variant="contained" color='secondary'>Editar</Button>

            </div>
            <div>
                <TextField
                    id="filled-multiline-flexible"
                    label="Digite suas observações"
                    multiline
                    minRows={3}
                    value={value}
                    onChange={handleChange}
                    variant="filled"
                    fullWidth
                />
            </div>
        </div>
    )
}