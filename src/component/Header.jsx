import { Link } from 'react-router-dom';
import './Header.scss';

// Je donne un paramètre à ma fonction Header, ici je choisis de l'appeler "pageTitle"
// Ce paramètre sera defini  sur chaque page ou le header doit apparaitre et sa valeur aparaitra au sein du paragraphe
// que j'ai logé plus bas dans cette page

function Header({pageTitle, isUserAuthenticated}) { // accolades pour tenir les parametres car considéré comme objet d'un tableau
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
        <h1>{pageTitle}</h1>
      </header>
    );
  }
  
  export default Header;