import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../Features/CartSlice';
import Shimmer from './Shimmer';
export default function Products() {
	const [ products, setProducts ] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchProducts = async () => {
			const res = await axios.get('https://fakestoreapi.com/products');
			const data = await res.data;
			// console.log(data);
			setProducts(data);
			// console.log(products);
		};
		fetchProducts();
	}, []);
	// console.log(products)
	const handleClick = (product) => {
		dispatch(add(product));
	};
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
			{products.length !== 0 ? (
				products.map((product) => (
					<div
						className="product_card bg-white px-5 py-10 flex flex-col 
                        text-center items-center justify-center"
						key={product.id}
					>
						<div>
							<img src={product.image} alt="product" className="h-28 mb-10" />
						</div>
						<div>
							<h4 className="text-black font-bold mb-3">{product.title}</h4>
							<h5 className="text-black font-bold">{product.price}</h5>
						</div>
						<div>
							<button
								onClick={() => handleClick(product)}
								className="bg-blue-400 px-6 py-2 rounded-full
                         mt-4 font-bold"
							>
								Add to Cart
							</button>
						</div>
					</div>
				))
			) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-80'>
                <Shimmer /><Shimmer /><Shimmer /><Shimmer />
                </div>
            )}
		</div>
	);
}
