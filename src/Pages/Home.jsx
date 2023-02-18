import Products from "../Components/Products";

export default function Home(){
    return(
        <div className="px-5 flex flex-col bg-gray-100   ">
            <div className="text-start my-5">
                <h1 className="text-3xl text-black font-semibold">Welcome To Redux Toolkit Store</h1>
            </div>
            <div>
                <h5 className="text-2xl text-black font-semibold">Products</h5>
                <Products />
            </div>
        </div>
    );
}