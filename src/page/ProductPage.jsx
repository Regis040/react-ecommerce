import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { products } from "../utilis/products-utilis";

function ProductPage() {
  const { id } = useParams();

 

  // permet de convertir le type de id (chaine de caractères)
  // car récupérée dans l'url
  // vers un integer
  // il vaut mieux faire la conversion soit même
  // et comparer avec triple égal (strict)
  // plutôt que laisser JS faire la conversion et comparer avec double égal
  const idInt = parseInt(id);

  // La fonction suivante permet de sélectionner l'Id du produit qui a précedemment été tarnsfomer en nombre.

  const productFound = products.find((product) => {
    return product.id === idInt;
  });

  return (
    <>
      <Header pageTitle="Le produit détaillé"/>
      <main>
        {/* Si l'Id d'un produit existe, je peux afficher le détail du produit cliqué */}
        {productFound ? (
          <article>
            <h1>Detail du produit</h1>
            <p>{productFound.title}</p>
            <p>{productFound.price}</p>
            <p>{productFound.description}</p>
            <p>{productFound.category}</p>
          </article>
        ) : (
          // sinon, si l'Id n'existe pas ....
          <p>Tu fais n'importe quoi Niels</p>
        )}
      </main>
    </>
  );
}

export default ProductPage;