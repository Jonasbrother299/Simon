import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import React from 'react';

import Preloader from "./preload/preloader"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// function Overlay() {
//   const [showApp, setShowApp] = useState(false); // State to control the visibility of the App component

//   const app = useRef();

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap.fromTo("#svg", { opacity: 1, stroke: "#000000" }, {
//         opacity: 0,
//         scale: 0.3,
//         stroke: "#FFFFFF",
//         duration: 1.5,
//         delay: 1,
//         onComplete: () => {
//           // Set the state to show the App component after 2 seconds
//           setTimeout(() => {
//             setShowApp(true);
//           }, 0);
//         }
//       })
//     }, app);
//     return () => ctx.revert();
//   }, [])

//   return (
// <>
//       <div className='loading__svg'>
//         <div ref={app}>
//           <svg style={{ position: 'absolute' }} id="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M415.44 512h-95.11L212.12 357.46v91.1L125.69 512H28V29.82L68.47 0h108.05l123.74 176.13V63.45L386.69 0h97.69v461.5zM38.77 35.27V496l72-52.88V194l215.5 307.64h84.79l52.35-38.17h-78.27L69 13zm82.54 466.61l80-58.78v-101l-79.76-114.4v220.94L49 501.89h72.34zM80.63 10.77l310.6 442.57h82.37V10.77h-79.75v317.56L170.91 10.77zM311 191.65l72 102.81V15.93l-72 53v122.72z" /></svg>
//         </div>
//       </div>
//       {showApp &&
//         <motion.div
//           initial={{ y: '100%' }} // Initial position (below the screen)
//           animate={{ y: 0 }} // Final position (top of the screen)
//           transition={{ duration: 1.5 }} // Animation duration
//           style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
//         >
//             <App />
//         </motion.div>
//       }
//       </>
//   )
// }

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Preloader/>
    <Router>
      <Routes>
        <Route path='/*' element={<App/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);