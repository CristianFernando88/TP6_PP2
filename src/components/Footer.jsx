export function Footer(){
    const anioActual = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {anioActual} Mi Sitio Web. Todos los derechos reservados.</p>
        </footer>
    )
}