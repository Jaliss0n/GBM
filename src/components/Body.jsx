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
            

            <div>
                <TableVagoes />
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