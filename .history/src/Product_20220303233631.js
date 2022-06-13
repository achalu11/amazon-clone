import React from 'react';

import './Product.css';

function Product(props) {
	const { id, title, img, rating, price } = props;
	return (
		<div className="product">
			<img src={img} alt="" />
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">{Array(rating).fill().map(() => <p>🌟</p>)}</div>
				<button> Add to Cart</button>
			</div>
		</div>
	);
}
export default Product;
