import { Link } from 'react-router-dom' //transforma o texto em um link que conversa com o router, permitindo que o usuário navegue entre as páginas sem recarregar a página inteira
import './Navbar.css'


function Navbar() {
  return (
    <nav className="navbar">
      <img src="/logo.jpeg" alt="My Portfolio Logo" className="logo" />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/references">References</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar