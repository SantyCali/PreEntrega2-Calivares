import './navbar.css'
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import Dropdown from '../Dropdown/Dropdown';
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import Secciones from './Secciones/Secciones';
const Navbar = () => {
    return (
    
    <>
      <nav className="navbar navbar-expand-lg bg-barra">
      <div className="container-fluid">
      <Logo/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          <Secciones/>
          <Dropdown/>
          </ul>
        </div>
        <CartWidget/>
        <FormBusqueda busqueda={"Buscar Productos"}/>
      </div>
    </nav>

    </> 

    );
}

export default Navbar;
