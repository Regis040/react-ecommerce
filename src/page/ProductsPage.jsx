import { Link } from "react-router-dom";
import Header from "../component/Header";
import { productSortedByPrice, products } from "../utilis/products-utilis";
import SideBarre from "../component/sideBarre";

function ProductsPage() {
 

  // La fonction "sort" permet de trier les éléments du tableau en l'occurence de trier les prix du tableau par ordre croissant.
  // La focntion a été envoyé dasn un dossier js en vue de son rappel
  // const productSortedByPrice = products.sort((product1, product2) => product1.price - product2.price);

  return (
    <>
    {/* Je glisse une valeur à mon parametre déclaré dans ma fonction Header dans mon "component "Header". 
    En l'occurence, cette valeur est "Page de liste de produit" 
    Ainsi dans le header de cette page, il apparaitra un paragraphe avec cette valeur.*/}
      <Header pageTitle="Page de liste de produit" />
      <main>
      <SideBarre whatYouWant="Vous consultez la listes des produits" />
        <h1>Les produits les moins chers pour les grosses pinces : </h1>
{/* La foncion "productSortedByPrice" est importée  du fichier javascript*/}
        {productSortedByPrice.map((product) => {
          return (
            <article className="articlestyle">
              <h2>{product.title}</h2>
              <p>{product.price} euros</p>
              <Link to={`/products/${product.id}`}>
                <button>Voir le produit</button>
              </Link>
            </article>
          );
        })}
      </main>
    </>
  );
}

export default ProductsPage;