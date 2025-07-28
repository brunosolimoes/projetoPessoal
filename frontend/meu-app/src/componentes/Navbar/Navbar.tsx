import { Nav, Logo, Menu, MenuItem } from "./Navbar.styles";


const Navbar = () => {

    return (
       <Nav>
        <Logo>Plataforma online</Logo>

            <Menu>
                <MenuItem><a href="#home">home</a></MenuItem>
                <MenuItem><a href="#fichas">fichas</a></MenuItem>
                <MenuItem><a href="#jogadores">jogadores</a></MenuItem>
                <MenuItem><a href="#sobre">sobre</a></MenuItem>
            </Menu>
       </Nav>
    )

}

export default Navbar;