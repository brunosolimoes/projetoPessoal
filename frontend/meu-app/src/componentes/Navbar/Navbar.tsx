
const Navbar = () => {

    return (
        <nav>

            <div><strong>MeuApp</strong></div>
            <ul style={{display: "flex", gap: '1rem', listStyle: "none"}}>
                <li><a href="#nome" style={{color: '#fff', textDecoration:'none'}}>nome</a></li>
                <li><a href="#sobre" style={{color: '#fff', textDecoration:'none'}}>sobre</a></li>
                <li><a href="#contato" style={{color: '#fff', textDecoration:'none'}}>contato</a></li>
            </ul>

        </nav>  
    )

}

export default Navbar;