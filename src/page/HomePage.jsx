import { Link } from "react-router-dom";
import Header from "../component/Header";
import { productSortedByPrice, products } from "../utilis/products-utilis";
import SideBarre from "../component/sideBarre";
import ProductCard from "../component/ProductCard";

function Home() {
 

  // je trie product par cat
  // je filtre par id

  const kitchenProducts = products.filter((product) => {
    return product.category === "cuisine";
  });

  kitchenProducts.sort((product1, product2) => new Date(product1.publicationDate) - new Date(product2.publicationDate));

  // La fonction "slice" récupère les trois derniers produits publiés 
  const lastPublishedKitchenProducts = kitchenProducts.slice(-3);

 // La fonction "productSortedByPrice" est importée. Elle trie les produits par prix croissants
  const cheapestProducts = productSortedByPrice.slice(0, 3);

  const titreDuSite = document.title;

  return (
    <>
      <Header pageTitle="Page produit" />
      <main>
        <SideBarre whatYouWant={titreDuSite} />
        <section>
          <h2>Les trois derniers produits cuisine : </h2>

          {lastPublishedKitchenProducts.map((currentProductInLoop) => {
            return (
              // Appel de la composant ProducCard.jsx auquel on attribue le paramètre "currentProductInLoop" de la fonction ci-dessus
              <ProductCard producToDisplay={currentProductInLoop} />

              // Le text ci-dessous est placé dans le composant ProducCard car il est récurrent et donc appelable plusieurs fois sur le site.
              // <article className="articlestyle">
              //   <h3>{product.title}</h3>
              //   <p>{product.price}</p>
              //   {/* Ce lien permet à l'utilisateur de se rendre sur une autre page nommée "ProductPage" afin d'afficher les détails du produit choisi.
              //   Ce lien fonctionne grâce à la fonction useParam  qui permet de se déplacer sur l'Id (présent dans l'Url)*/}
              //   <Link to={`/products/${product.id}`}>
              //     <button>Voir le produit</button>
              //   </Link>
              // </article>
            );
          })} 
        </section>
        <section>
          <h3>Produits les moins chers : </h3>
          {cheapestProducts.map((product) => {
            return (
              <article className="articlestyle">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}`}>
                  <button>Voir le produit</button>
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Home;