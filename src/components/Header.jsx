// components/Header.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = ({ setHireMeModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Portfolio
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition ${isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-600"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <button 
              onClick={() => setHireMeModalOpen(true)} 
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium"
            >
              Hire Me
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 mt-4 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-lg font-medium ${isActive ? "text-purple-600" : "text-gray-700"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <button 
              onClick={() => {setHireMeModalOpen(true); setIsOpen(false)}} 
              className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium"
            >
              Hire Me
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;



// components/Header.jsx
// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Skills", path: "/skills" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-center h-16">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
//               P
//             </div>
//             <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//               Portfolio
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `font-medium transition ${isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-600"}`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//             <Link to="/hire" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium">
//               Hire Me
//             </Link>
//           </nav>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <nav className="md:hidden pb-4 border-t border-gray-200 mt-4 pt-4">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `block py-3 text-lg font-medium ${isActive ? "text-purple-600" : "text-gray-700"}`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//             <button className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium">
//               Hire Me
//             </button>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;