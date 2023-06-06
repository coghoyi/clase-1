const Button = ({nombre, edad}) => {
    nombre = nombre.toUpperCase();
    return (
        <div>
            <p>Name: {nombre}</p>
            <p>Edad: {edad}</p>
        </div>
    )
}
export default Button;