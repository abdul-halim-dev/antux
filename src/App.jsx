 
 


// const route = createBrowserRouter([
//   {
//     path:"/",
//     element:<Aside/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/service",
//         element:<Service/>
//       },
//       {
//         path:"/portfolio",
//         element:<Portfolio/>
//       },
//       {
//         path:"/resume",
//         element:<Resume/>
//       },
//       {
//         path:"/price",
//         element:<Price/>
//       },
//       {
//         path:"/blog",
//         element:<Blog/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Service from "./pages/home/services/Service";
import Portfolio from "./pages/portfolio/Portfolio";
import Price from "./pages/price/Price";
import Resume from "./pages/resume/Resume";




 
 const App = () => {
  return (
   <div className="main_container">
    <Header/>
    <Home/>
    <Service/>
    <Portfolio/>
    <Resume/>
    <Price/>
    <Blog/>
    <Contact/>
    <Footer/>


   </div>
  );
 };
 
 export default App;