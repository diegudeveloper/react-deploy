export function Boton () {
    const consola = () => {
        console.log("Hola Mundo")
    }
    return (
        <button onClick={consola}>Enviar</button>
    ) 
}