// import React, { useState } from 'react';
// import { AiOutlineMenu } from 'react-icons/ai';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-cyan-400 h-screen">
//       <nav className={`bg-white p-5 md:flex md:justify-between md:items-center ${isMenuOpen ? 'shadow-md' : ''}`}>
//         <div className="flex justify-between items-center">
//           <span className="text-3xl font-[Poppins] font-bold cursor-pointer">
//             <img
//               className="h-10 inline mr-4"
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAATlBMVEX///8HttUAs9MAsdIAr9Hr+Pv4/f70+/3k9fna8ffY7vVsyuC85vAkuNbD6PFZxd2y4u41vtmY2unQ7vV/0eR2zeKo3uyP1udIv9qf2upjTfHUAAAD+klEQVR4nO2a63KrOgyFQb6AY4y547z/ix4DaXZDA5bSMZ054+9vJ8mqkHVZJssSiUQikUgkEolEIpFIJBJEpCjVbUWVQv6lkr4brTM54wtgWjt26k+ElI3lnEH+AnhduikvltKPZi/kKQjMcGV8es0PlHwFSF8lR+ijoLzIEVdoqQwLSVlgpomvZeAYKQtcF3GlFBoVlkdwXNzMsQQty8Hq40mRNpi5++DES5yBFJctOLHUTNS4LPA4aspPtPjYTOGvluRzR06YB6wOfvWdWiGbr4QBBsYtzRqbQawKabFELZnZlIAZ61sphFD1bAAZrPPY9Dyk9od6tgZFv3xvPYbb1AI/qzc15MSUKdpFi/1RUhUuk+D4f68ABpqWrOY+LG9PaYMKDjs6Ux3DZPgrNgd3MMEJVI/gb0cc5fxnHVFLadhxD5YDJjaQz/sDXAwGEIdtT8NPT98dlTiM6eqbnnqANaSWulToQCWocWfcFwY3TPWtr+72qy6cnrS3mFCJrNE9lK2bzTPrgVzwyrB6hRWzw5AXG8xTvX3Uug6P/C/pP9ACOo4W/6TIsQETb2bvyWoizsiZMiQ5EHd7EC1eDRhqT6IiZ+ySBybmM3rQO9z6ayPvmxvFFB4Agd+vsrlkd24OABuvNJSKyeUHeoCZy9ybJ33X8r2nBIwzPf0uKlIWHz1h0QzWeQUrkLdOd785QaqZR62tR+txbujhlUL1deWpe1V+fn6K+u786AFfRwMWK5O5rr7c7ZVqNPBu7PeT4rVmpp/b7JmduV/lotK3oVUIeHtRdIYc0ewgHy7InVuLHK3jN92sIkwkMEfWQnLtOHVjJzGhHecN5uLNAci98BvQxlJTUqWsaiJdWLhP1jAIbr4fcadbzltswgWnpz7M8l/y+obPGc6tyzGbWEm1g7Jx+/HNtWiqabYGU4qXj7jz2EjXEbVs26Dvgc0zB2SFNDPZud9jGXWkWlxLyPeXeWJERecsNsIysmnns5e1t59/UKheBYfVr3R+LSGKmSFnB60GZdhB/t4mbPygSLUaZAvHvnGPap7wZhcSGj7op4qfuRMlamMFGF+HCjWs8zOjVsWBn09uSFMeYKiUEEUhSr82baP80dM/xgXuy+SIHbkYtM46Z54XQOR2ocJVCW117CBf32QCke8oT/5npMg2Lw78Xf93Yr0SMdNjA/GGdvK9NqPWXgrELGZRB3bkXc6DuMtDtszsaDnRtWRZgS5/ka4oXqlxu/gFLu/KFHrTibHuOktJNu4kd5i51FnN1uvOd4YSMG7uV781uOrxC8RiYz7WCr/f5G78EyUrslTNrG3rcXqYenXJy3mJRCKRSCQSiUQikUgkEv8n/gMXdSm6H1+Q/AAAAABJRU5ErkJggg=="
//             alt="logo"
//             />
//             Tailwind
//           </span>
//           <span
//             className="text-3xl md:hidden block mx-2 cursor-pointer"
//             onClick={toggleMenu}
//           >
//             <AiOutlineMenu />
//           </span>
//           </div>

//         <ul
//           className={`${
//             isMenuOpen ? 'max-h-96' : 'max-h-0'
//           } md:flex md:items-center z-[-1] md:z-auto md:static bg-white w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-max-h ease-in-out duration-700 overflow-hidden text-center`}
//         >
//           <li className="mx-4 my-6 md:my-0">
//             <a href="#" className="text-2xl hover:text-cyan-500 duration-500">
//               Home
//             </a>
//           </li>
//           <li className="mx-4 my-6 md:my-0">
//             <a href="#" className="text-2xl hover:text-cyan-500 duration-500">
//               Services
//             </a>
//           </li>
//           <li className="mx-4 my-6 md:my-0">
//             <a href="#" className="text-2xl hover:text-cyan-500 duration-500">
//               About
//             </a>
//           </li>
//           <li className="mx-4 my-6 md:my-0">
//             <a href="#" className="text-2xl hover:text-cyan-500 duration-500">
//               Contact
//             </a>
//           </li>
//           <li className="mx-4 my-6 md:my-0">
//             <a href="#" className="text-2xl hover:text-cyan-500 duration-500">
//               Blog
//             </a>
//           </li>
//         <button className="bg-cyan-500 hover:bg-cyan-400 text-white py-2 px-6 mx-4 font-[Poppins] duration-500 rounded-md">
//           Get Started
//         </button>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true) // Default value set to true

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect hook to close the menu when screen size changes
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true); // Close the menu for larger screens
      } else {
        setIsMenuOpen(false); // Close the menu for smaller screens
      }
    }

    // Call the function initially to set the correct menu state based on screen size
    handleResize();
    
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="bg-cyan-400 h-screen">
       <nav className={`bg-white p-5 md:flex md:justify-between md:items-center ${isMenuOpen ? 'shadow-md' : ''}`}>
       <div className="flex justify-between items-center">
         <span className="text-3xl font-[Poppins] font-bold cursor-pointer">            <img
              className="h-10 inline mr-4"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAATlBMVEX///8HttUAs9MAsdIAr9Hr+Pv4/f70+/3k9fna8ffY7vVsyuC85vAkuNbD6PFZxd2y4u41vtmY2unQ7vV/0eR2zeKo3uyP1udIv9qf2upjTfHUAAAD+klEQVR4nO2a63KrOgyFQb6AY4y547z/ix4DaXZDA5bSMZ054+9vJ8mqkHVZJssSiUQikUgkEolEIpFIJBJEpCjVbUWVQv6lkr4brTM54wtgWjt26k+ElI3lnEH+AnhduikvltKPZi/kKQjMcGV8es0PlHwFSF8lR+ijoLzIEVdoqQwLSVlgpomvZeAYKQtcF3GlFBoVlkdwXNzMsQQty8Hq40mRNpi5++DES5yBFJctOLHUTNS4LPA4aspPtPjYTOGvluRzR06YB6wOfvWdWiGbr4QBBsYtzRqbQawKabFELZnZlIAZ61sphFD1bAAZrPPY9Dyk9od6tgZFv3xvPYbb1AI/qzc15MSUKdpFi/1RUhUuk+D4f68ABpqWrOY+LG9PaYMKDjs6Ux3DZPgrNgd3MMEJVI/gb0cc5fxnHVFLadhxD5YDJjaQz/sDXAwGEIdtT8NPT98dlTiM6eqbnnqANaSWulToQCWocWfcFwY3TPWtr+72qy6cnrS3mFCJrNE9lK2bzTPrgVzwyrB6hRWzw5AXG8xTvX3Uug6P/C/pP9ACOo4W/6TIsQETb2bvyWoizsiZMiQ5EHd7EC1eDRhqT6IiZ+ySBybmM3rQO9z6ayPvmxvFFB4Agd+vsrlkd24OABuvNJSKyeUHeoCZy9ybJ33X8r2nBIwzPf0uKlIWHz1h0QzWeQUrkLdOd785QaqZR62tR+txbujhlUL1deWpe1V+fn6K+u786AFfRwMWK5O5rr7c7ZVqNPBu7PeT4rVmpp/b7JmduV/lotK3oVUIeHtRdIYc0ewgHy7InVuLHK3jN92sIkwkMEfWQnLtOHVjJzGhHecN5uLNAci98BvQxlJTUqWsaiJdWLhP1jAIbr4fcadbzltswgWnpz7M8l/y+obPGc6tyzGbWEm1g7Jx+/HNtWiqabYGU4qXj7jz2EjXEbVs26Dvgc0zB2SFNDPZud9jGXWkWlxLyPeXeWJERecsNsIysmnns5e1t59/UKheBYfVr3R+LSGKmSFnB60GZdhB/t4mbPygSLUaZAvHvnGPap7wZhcSGj7op4qfuRMlamMFGF+HCjWs8zOjVsWBn09uSFMeYKiUEEUhSr82baP80dM/xgXuy+SIHbkYtM46Z54XQOR2ocJVCW117CBf32QCke8oT/5npMg2Lw78Xf93Yr0SMdNjA/GGdvK9NqPWXgrELGZRB3bkXc6DuMtDtszsaDnRtWRZgS5/ka4oXqlxu/gFLu/KFHrTibHuOktJNu4kd5i51FnN1uvOd4YSMG7uV781uOrxC8RiYz7WCr/f5G78EyUrslTNrG3rcXqYenXJy3mJRCKRSCQSiUQikUgkEv8n/gMXdSm6H1+Q/AAAAABJRU5ErkJggg=="
            alt="logo"
            />
            Tailwind
          </span>
          <span
            className="text-3xl md:hidden block mx-2 cursor-pointer"
            onClick={toggleMenu}
          >
            <AiOutlineMenu />
          </span>
          </div>

        <ul
          className={`${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          } md:flex md:items-center z-[-1] md:z-auto md:static bg-white w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-max-h ease-in-out duration-700 overflow-hidden text-center`}
        >
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-2xl hover:text-cyan-500 duration-500">
              Home
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-2xl hover:text-cyan-500 duration-500">
              Services
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-2xl hover:text-cyan-500 duration-500">
              About
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-2xl hover:text-cyan-500 duration-500">
              Contact
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-2xl hover:text-cyan-500 duration-500">
              Blog
            </a>
          </li>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-white py-2 px-6 mx-4 font-[Poppins] duration-500 rounded-md">
          Get Started
        </button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;


