import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Boton} from "./Boton";
import {Menu} from "./Menu";
import {Saludo} from "./Saludo";
import {Formulario} from "./Formulario";

const objeto = {
    nombre: "Armando",
    apellido: "Gomez"
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <Menu/>
    <App data = {objeto}/>
    <Boton/>
    <Saludo/>
    <Formulario/>
    </>  
)