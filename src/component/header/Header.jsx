
import { Link, NavLink } from "react-router-dom"
import { FaRegMessage } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";





const Header = () => {



    return (
        <header className=" w-[100%] h-[80px] flex items-center justify-between px-[30px]">
            <div className="logo_box flex items-center justify-center gap-4">

                {/* <div className="res_icon text-2xl cursor-pointer hidden  ">
                 <span> <FaBars/> </span>
            </div> */}

                <Link to='/' className="image_box w-[120px]  ">
                    <img className=" w-[100%] h-[100%] object-cover " src="./src/img/flogo.png" alt="" />
                </Link>


            </div>

            <nav className="   ">

                <ul className=" flex items-center justify-center gap-4">
                    <li>  <NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    } to="/"> Home </NavLink>   </li>
                    <li>  <NavLink to="/service"> Service </NavLink>   </li>
                    <li>  <NavLink to="/portfolio"> Portfolio </NavLink>   </li>
                    <li>  <NavLink to="/resume"> Resume </NavLink>   </li>
                    <li>  <NavLink to="/price"> Price </NavLink>   </li>
                    <li>  <NavLink to="/blog"> Blog </NavLink>   </li>
                    <li>  <NavLink to="/contact"> Contact  </NavLink>   </li>


                </ul>
            </nav>



            <Sheet>
                <SheetTrigger >
                    <div className="res_icon text-2xl cursor-pointer  ">
                        <span> <FaBars /> </span>
                    </div>
                </SheetTrigger>
                <SheetContent side={'left'} className="w-[270px] h-[400px] sm:w-[540px] " >
                    <nav className=" flex ">

                        <ul className=" flex flex-col items-center justify-center gap-5">
                            <li>  <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            } to="/"> Home </NavLink>   </li>
                            <li>  <NavLink to="/service"> Service </NavLink>   </li>
                            <li>  <NavLink to="/portfolio"> Portfolio </NavLink>   </li>
                            <li>  <NavLink to="/resume"> Resume </NavLink>   </li>
                            <li>  <NavLink to="/price"> Price </NavLink>   </li>
                            <li>  <NavLink to="/blog"> Blog </NavLink>   </li>
                            <li>  <NavLink to="/contact"> Contact  </NavLink>   </li>


                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>




            <div className="let_contact  hidden md:flex xl:flex  ">
                <NavLink className=" text-lg font-bold flex items-center justify-center gap-3" to="/contact">
                    Lets Talk

                    <span> <FaRegMessage /> </span>
                </NavLink>
            </div>

        </header>
    )
}

export default Header