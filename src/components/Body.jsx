import { Button, TextField } from "@mui/material";
import React from "react";
import '../components_css/Body.css'
import axios from "axios";
import TableVagoes from "./TableVagoes";
import { useEffect, useState } from "react";
import authorization from "../authorization";


export default function Body() {


    //////////////////////CHAMADA OBSERVAÇOES/////////////////////////////




    return (
        <div id='body-body'>
            <div>
                <TableVagoes />
            </div>






        </div>
    )
}