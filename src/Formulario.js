import { useState } from "react"

export function Formulario () {
   
    const [name, setName] = useState("");
    const [apellido, setApellido] = useState("");
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(name, apellido)

        setName("");
        setApellido("");
        if(name.length > 5){
            console.log('tiene 5')
        }

    }
    
    
    return (
        <form onSubmit={HandleSubmit}>
            <label>Nombre:</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />

            <label>Apellido:</label>
            <input type="text" onChange={(e) => setApellido(e.target.value)} value={apellido} />
            <input type="submit"/>
        </form>
    
    
    )
}