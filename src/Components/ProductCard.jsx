import { useState } from "react";
import { add } from "../Features/CartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {
    const [ click , setClick ] = useState(false);
    const dispatch = useDispatch();

    const handleClick = (product) => {
		dispatch(add(product));
		setClick(true);
		setTimeout(() =>{
			setClick(false);
		},2000);
	};
    return (
		<div className="product_card bg-white px-5 py-10 flex flex-col 
        text-center items-center justify-center">
			<div>
				<img src={product.image} alt="product" className="h-28 mb-10" />
			</div>
			<div>
				<h4 className="text-black font-bold mb-3">{product.title}</h4>
				<h5 className="text-black font-bold"><span>&#36;</span> {product.price}</h5>
			</div>
			<div>
				<button
                    disabled={click}
					onClick={() => handleClick(product)}
					className="bg-blue-400 px-6 py-2 rounded-full
         mt-4 font-bold hover:bg-blue-500"
				>
					{click ? ' Added ' : 'Add to Cart'}
				</button>
			</div>
		</div>
	);
}
