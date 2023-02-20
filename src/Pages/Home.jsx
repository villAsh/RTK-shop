import Products from '../Components/Products';
import { useState } from 'react';
export default function Home() {
	const [ sort,setSort ] = useState();
    const handleChange = (e) => {
        e.preventDefault();
        setSort(e.target.value)
        console.log(sort)
    }
    return (
		<div className="px-5 flex flex-col bg-gray-100   ">
			<div className="text-start my-5">
				<h1 className="text-3xl text-black font-semibold">Welcome To Redux Toolkit Store</h1>
			</div>
			<div>
				<div className='flex justify-between'>
					<h5 className="text-2xl text-black font-semibold">Products</h5>
                    <select value="Sort by Price" onChange={handleChange}>
                        <option value="Sort by Price">Sort by Price</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
				</div>

				<Products />
			</div>
		</div>
	);
}
