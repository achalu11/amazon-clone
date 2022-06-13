import React from 'react';

import './Product.css';

function Product(props) {
	const { id, title, img, rating, price } = props;
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">{Array(rating).fill().map(() => <p>🌟</p>)}</div>
			</div>
			<img src={img} alt="" />

			<button> Add to Cart</button>
		</div>
	);
}
export default Product;
