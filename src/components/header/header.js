import React,{useState} from 'react';
import './style.css';



const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  
    return(
        <nav className="navigation">
        {/* <a href="/" className="brand-name">
        Artemis
        </a> */}
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg>
          
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#install">Install</a>
            </li>
            <li>
              <a href="#Docs">Docs</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#Blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Help</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}
 
export default Header;