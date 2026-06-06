function ProductCard({ product, onDetail, onAddCart }) {
  return (
    <div className="card">
  <img src={product.image} alt={product.title} />

  <div className="card-content">
    <h3>{product.title}</h3>

    <div className="price-rating">
      <p className="price">${product.price}</p>
      <p className="rating">
        ⭐ {product.rating.rate}
      </p>
    </div>
  </div>

  <div className="button-group">
    <button
      className="detail-btn"
      onClick={() => onDetail(product)}
    >
      Detail
    </button>

    <button
      className="cart-btn"
      onClick={() => onAddCart(product)}
    >
      Add Cart
    </button>
  </div>
</div>
  );
}

export default ProductCard;