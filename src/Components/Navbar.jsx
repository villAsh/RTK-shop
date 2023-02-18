import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar(){
    const cartItem = useSelector((state) => state.cart);
    return(
        <div className="px-10 py-4 flex justify-between items-center bg-slate-200">
            <span className="text-blue-400 text-3xl font-semibold">RTK Store</span>
            <div className="flex md:space-x-4 text-xl font-semibold">
                <Link to='' className="hover:text-blue-400 hover:-mt-3 hover:delay-100 hover:transition-all">Home</Link>
                <Link to='/cart'  className="hover:text-blue-400 hover:-mt-3 hover:delay-100 hover:transition-all">Cart</Link>
                <Link to='/cart'  className="hover:text-blue-400 hover:delay-100 hover:transition-all">Cart Items : {cartItem.length}</Link>
            </div>
        </div>
    );
}