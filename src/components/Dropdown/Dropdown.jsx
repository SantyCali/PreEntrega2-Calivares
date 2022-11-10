const Dropdown = () => {
    return (
        <div className="dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
        </a>

      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Chocolates</a></li>
        <li><a className="dropdown-item" href="#">Golosinas</a></li>
        <li><a className="dropdown-item" href="#">Fiambreria</a></li>
      </ul>
    </div>
    );
}


export default Dropdown;