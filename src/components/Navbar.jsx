import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (

        <div className="bg-slate-50 flex p-4 border-b border-stone-200 items-center justify-between h-16  ">

            <nav  >
         
                <ul className="flex gap-9 ">
                    <li>
                        <NavLink to='/home' >Home</NavLink>
                    </li>


                    <li>
                        <NavLink to='/cart' >cart</NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar