
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { fetchProducts } from '../Features/ProductSlice';
import ProductCard from './ProductCard';
import Shimmer from './Shimmer';
export default function Products() {
	const {  data : products , status } = useSelector((state) => state.product)
	const dispatch = useDispatch();
    useEffect(() => {
		dispatch(fetchProducts());

		// const fetchProducts = async () => {
		// 	const res = await axios.get('https://fakestoreapi.com/products');
		// 	console.log(res)
		// 	const data =  await res.data;
		// 	console.log(data);
		// 	setProducts(data);
		// 	// console.log(products);
		// };
        // fetchProducts();
	}, []);
	// console.log(products)

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
			{status === 'idle' ? (
				products.map((product) => (
				<ProductCard key={product.id} product={product} />
				))
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-80">
					<Shimmer />
					<Shimmer />
					<Shimmer />
					<Shimmer />
					<Shimmer />
					<Shimmer />
					<Shimmer />
					<Shimmer />
				</div>
			)}
		</div>
	);
}
