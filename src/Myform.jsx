import '../src/Nav.css'
import { useAuth0 } from "@auth0/auth0-react";


const Myform = () => {
    const { loginWithRedirect } = useAuth0();

  return (
    <nav className="navbar">
    <div className="logo">
      <h2>MyWebsite</h2>
    </div>
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><button onClick={() => loginWithRedirect()}>Log In</button></li>
      
    </ul>
  </nav>
);
  
}

export default Myform
