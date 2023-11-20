import { Link } from 'react-router-dom';
import './Header.scss';



function Header() {
    return (
      <header>
        <img
          src="https://www.zarla.com/images/zarla-lectrodomus-1x1-2400x2400-20220705-x44pr4y4bq86kgcbw36t.png?crop=1:1,smart&width=250&dpr=2"
          alt="electro menager"
        />
  {/* Les Link déclarés dans la nav permettent à l'utilisateur d'accéder aux deux pages "HomePage" et "ProductPage"
  Le "to" fait référence au "path" contenu dans la "route" du "header" */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;