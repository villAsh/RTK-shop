import { useDispatch, useSelector } from 'react-redux';
import { remove, increaseQty, decreaseQty,placeOrder } from '../Features/CartSlice';
export default function Cart() {
	const cartList = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	
	const handleRemove = (productId) => {
		dispatch(remove(productId));
	};

	const getTotal = () =>{
		let total = 0;
		cartList.forEach((product) => {
			total += product.price * product.qty;
			console.log("total..",total)
		})
		return total.toFixed(2);
	}

	const handleCart = (cartlist) => {
		alert("Your order has been palced....Happy Shopping");
		dispatch(placeOrder(cartlist))
	}

	return (
		<div className="px-5 py-5 flex flex-col bg-gray-100 min-h-[90vh]">
			<h1 className="text-2xl font-bold">Cart</h1>
			<table className="mt-5 table-auto">
				<thead className="bg-blue-200 text-black">
					<th className="p-5 ">Product Image</th>
					<th>Product Title</th>
					<th>Product Price</th>
					<th>Product Quantity</th>
					<th>Remove</th>
				</thead>
				<tbody>
					{cartList.length !== 0 ? (
						cartList.map((product) => (
							<tr className="text-start" key={product.id}>
								<td className="py-5">
									<img src={product.image} alt="product" className="h-28" />
								</td>
								<td>
									<h4 className="font-bold">{product.title}</h4>
								</td>
								<td>
									<h5 className="font-bold"> &#36;{product.price} </h5>
								</td>
								<td>
									<div className="flex items-center justify-center space-x-3">
										<button
										
											className="font-bold text-2xl pb-1 bg-blue-400 hover:bg-blue-500 px-7 py-[1px] text-center rounded-full"
											onClick={() => dispatch(increaseQty(product.id))}
										>
											+
										</button>
										<h5 className="font-bold my-auto">{product.qty}</h5>
										<button
									
											className="font-bold text-2xl pb-1 bg-blue-400  hover:bg-blue-500 px-8 py-[1px] text-center rounded-full"
											onClick={() => dispatch(decreaseQty(product.id))}
										>
											-
										</button>
									</div>
								</td>
								<td>
									<button
										onClick={() => handleRemove(product.id)}
										className="bg-blue-400 hover:bg-blue-500 px-8 py-2 rounded-full
                            mt-4 font-bold"
									>
										Remove
									</button>
								</td>
							</tr>
							// <div className="bg-white flex justify-between items-center mt-5 p-5" key={product.id}>

							// </div>
						))
					) : (
						<div className="flex items-center justify-center mt-5 text-center">
							<h1 className="text-2xl font-semibold text-center">Cart is empty</h1>
						</div>
					)}
				</tbody>
			</table>
			{cartList.length >= 1 ? (
					<div className="float-right ml-auto md:mr-10 flex items-center flex-col">
						<h5 className='font-bold text-2xl'>Total : &#36;<span>{getTotal()}</span></h5>
					<button onClick={(cartList) => handleCart(cartList)}
						className="bg-blue-400 hover:bg-blue-500 px-8 py-2 rounded-full
                        mt-4 font-bold"
					>		
						Place Order
					</button>
				</div>
			) : ''}
		
		</div>
	);
}
