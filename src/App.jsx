import React,{ useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import HireMeModal from './pages/HireMeModal'


function App() {
  const [isHireMeModalOpen, setHireMeModalOpen] = useState(false);

  return (
    <>
   
  
    <BrowserRouter>
      <Header setHireMeModalOpen={setHireMeModalOpen}/>              
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
    <HireMeModal 
        isOpen={isHireMeModalOpen} 
        onClose={() => setHireMeModalOpen(false)} 
      />
    <Footer/>
    </>
  )
}

export default App


// import React,{ useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
// import Home from './pages/Home'
// import Footer from './components/Footer'
// import About from './pages/About'
// import Skills from './pages/Skills'
// import Contact from './pages/Contact'
// import Projects from './pages/Projects'
// import HireMeModal from './pages/HireMeModal'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
   
  
//     <BrowserRouter>
//       <Header />               {/* Header is now INSIDE BrowserRouter */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//          <Route path="/skills" element={<Skills />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/hire" element={<HireMeModal />} />
//         <Route path="/contact" element={<Contact />} /> 
//       </Routes>
//     </BrowserRouter>
//     <Footer/>
//     </>
//   )
// }

// export default App
