// // import React from 'react'
// // import './Navbar.css'
// // function Navbar() {
// //   return (
// //     <>
// //     <nav className="navbar navbar-expand-lg bg-body-tertiary">
// //   <div className="container-fluid">
// //     <a className="navbar-brand" href="#home">&lt;aditya_todi/&gt;</a>
// //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" id="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //       <span className="navbar-toggler-icon"></span>
// //     </button>
// //     <div className="d-flex">
// //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="#home">_home</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="#about">_about</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="#experience">_experiences</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="#portfolio">_portfolio</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="#skills">_skills</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="#resume">_resume</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="#contact">_contact</a>
// //         </li>
// //       </ul>
// //     </div>
// //     </div>
// //   </div>
// // </nav>
// //     </>
// //   )
// // }

// // export default Navbar
// import React from 'react';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#home">&lt;aditya_todi/&gt;</a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#home">_home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#about">_about</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#experience">_experiences</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#portfolio">_portfolio</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#skills">_skills</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#resume">_resume</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#contact">_contact</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">&lt;aditya_todi/&gt;</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">_home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">_about</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#experience">_experiences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#portfolio">_portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#skills">_skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#resume">_resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#contact">_contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
