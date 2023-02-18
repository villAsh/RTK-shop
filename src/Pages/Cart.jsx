import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Features/CartSlice';
export default function Cart() {
	const cartList = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const handleRemove = (productId) => {
		dispatch(remove(productId));
	};

	return (
		<div className="px-5 py-5 flex flex-col bg-gray-100 min-h-[90vh]">
			<h1 className="text-2xl font-bold">Cart</h1>
			{cartList.length !== 0 ? (
				cartList &&
				cartList.map((product) => (
					<div className="bg-white flex justify-between items-center mt-5 p-5" key={product.id}>
						<img src={product.image} alt="product" className="h-28" />
						<h4 className="font-bold">{product.title}</h4>
						<h5 className="font-bold">{product.price}</h5>
						<button
							onClick={() => handleRemove(product.id)}
							className="bg-blue-400 px-8 py-2 rounded-full
                            mt-4 font-bold"
						>
							Remove
						</button>
					</div>
				))
			) : (
				<div className="flex items-center justify-center mt-5">
					<h1 className="text-2xl font-semibold">Cart is empty</h1>
				</div>
			)}
		</div>
	);
}
