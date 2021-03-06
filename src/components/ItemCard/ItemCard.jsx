import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ItemCard.scss';

const ItemCard = ({ item, addToCart }) => (
  <div className="item-card">
    <img
      src={`/product_images/${item.thumbnail}`}
      className="item-card__image"
      alt="Item thumbnail"
    />
    <div className="item-card__name">{item.name}</div>
    <div className="item-card__bottom">
      
      <p className="item-card__bottom__prices">
        <span className={`item-card__bottom__price ${item.discounted_price > 0 && 'has-discount'}`}>${item.price}</span>
        { item.discounted_price > 0 ?
            <span className="item-card__bottom__discount">
              ${item.discounted_price}
            </span>
          : null
        }
      </p>
      <button
        data-test="buy-btn"
        className={`item-card__bottom__buy-btn ${item.adding ? 'loading' : ''}`}
        onClick={() => addToCart(item.product_id, item)}
      >
        Add to Cart
      </button>
    </div>
    <div className="item-card__hover">
      <Link
        to={`/products/${item.product_id}`}
        className="item-card__hover__view-btn"
      >
        View Product
      </Link>
    </div>
  </div>
);

ItemCard.propTypes = {
  item: propTypes.object.isRequired,
  addToCart: propTypes.func,
};

ItemCard.defaultProps = {
  addToCart: () => '',
};

export default ItemCard;
