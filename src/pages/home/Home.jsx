import { Link } from "react-router-dom"

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaDribbble } from "react-icons/fa6";
 
const Home = () => {
  return (
    <div className="flex items-start justify-center home_container w-[100%]   bg-[#ebeff2] gap-4 ">
        <div className="home_left_box w-[48%] flex flex-col gap-6 ">
        <h1 className="text-6xl font-bold"> I 👋 am Dalton </h1>
        <h1 className="text-6xl font-bold"> Web Developer </h1>
        <p className="text-1xl  ">  Hi, my name is Dalton Grant and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites. </p>

        <div className="social_box flex  gap-5 items-center justify-start">
          <div className="hire_box flex items-center justify-center">
            <Link to='./contact'> Hire Me Now </Link>
          </div>

      <div className="all_socail_icons flex gap-2 items-center justify-center">
        <Link className="flex bg-slate-200 w-[50px] h-[50px] items-center justify-center text-2xl rounded-full shadow  hover:text-orange-700">  <FaFacebook/>  </Link>
        <Link className="flex bg-slate-200 w-[50px] h-[50px] items-center justify-center text-2xl rounded-full shadow  hover:text-orange-700">  <FaLinkedin/>  </Link>
        <Link className="flex bg-slate-200 w-[50px] h-[50px] items-center justify-center text-2xl rounded-full shadow hover:text-orange-700">  <FaDribbble/>  </Link>
      
      </div>

        </div>

        </div>
        <div className="home_right_box w-[48%] flex items-center justify-center">
        <div className="image_boxx w-[400px] h-[400px] items-center justify-center rounded-md">
          <img className="w-[100%] h-[100%] object-contain" src="./src/img/p5.png" alt="" />
           </div>
        </div>
      
        
        </div>
  )
}

export default Home