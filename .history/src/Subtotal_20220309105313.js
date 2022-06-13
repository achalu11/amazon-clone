import React from 'react';
import './Subtotal.css';

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
// import { getBasketTotal } from "./reducer";
// import { useHistory } from "react-router-dom";

function Subtotal() {
	//   const history = useHistory();
	const [ { basket }, dispatch ] = useStateValue();
	const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

		// console.log(basket[0]?.price + basket[1]?.price);
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>

			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
