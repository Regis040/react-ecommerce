import { Link } from 'react-router-dom';
import './Header.scss';

// Je donne un paramètre à mon header, ici je choisi de l'appeler "pageTitle"
// Ce paramètre sera defini à sur chauqe page ou le header doit apparaitre et sa valeur appraitra au sein du paragraphe
// que j'ai logé plus bas dans cette page

function Header({pageTitle}) {
    return (
      <header>
 
  {/* Les Link déclarés dans la nav permettent à l'utilisateur d'accéder aux deux pages "HomePage" et "ProductPage"
  Le "to" fait référence au "path" contenu dans la "route" du "header" */}
        <nav className='navSituation'>
        <img
          src="https://www.zarla.com/images/zarla-lectrodomus-1x1-2400x2400-20220705-x44pr4y4bq86kgcbw36t.png?crop=1:1,smart&width=250&dpr=2"
          alt="electro menager"
        />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <p>{pageTitle}</p>
      </header>
    );
  }
  
  export default Header;