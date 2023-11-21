import { Link } from 'react-router-dom';


function ProductCard (product) {
  return (
      <article className="articlestyle">
          <h2>{product.title}</h2>
          <p>{product.price} euros</p>
          <Link to={`/products/${product.id}`}>
            <button>Voir le produit</button>
          </Link>
      </article>
  );
}
export default ProductCard;

