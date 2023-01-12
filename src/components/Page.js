// import logo from './logo.svg';
// import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../App.css';
// import { HiOutlineExternalLink } from "react-icons/hi";
import { MouseContext } from "../context/mouse-context";
import { useContext } from "react";


function App() {

   const {  cursorChangeHandler } = useContext(MouseContext);
  
  useEffect(() => {
    AOS.init()
  })

  const data = {
    categories: ['FRONTEND', 'WEB', 'VUE', 'TAILWINDCSS']
  }

  return (
    <div className='back-half flex flex-col w-screen h-screen'>
      <div className='w-full flex' style={{ height: '35%' }}>
        <div className='w-full self-center px-20'>
          <div className='text-left mx-7 font-bold flex flex-col gap-6'>
            <div style={{ fontSize: '18px' }}>Kanetsu App</div>
            
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              className='w-1/2 text-5xl'
              style={{ width: '75%' }}
            >
              A BRAND NEW WEB DEVELOPMENT WITH VUE LANGUAGE.
            </div>
            
            <div className='flex flex-row gap-3 mt-5'>
              {data.categories.map((x, y) => ((
                <div className='border border-white w-fit rounded-full'>
                  <div className='p-2 text-xs font-light'>{x}</div>
                </div>
              )))}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-3'>
        <div className='flex justify-center'>
          <img 
            onMouseEnter={() => cursorChangeHandler("white")}
            onMouseLeave={() => cursorChangeHandler("")}
            alt='images'
            width={'90%'}
            className='object-fill'
            src='https://uploads-ssl.webflow.com/63640793650a2e24af80903e/636412e3a7a05b026fc45542_Meridian%20Case%20Study%201-p-1600.jpg'
            style={{ height: 'auto' }}
          />  
        </div>
      </div>
    </div>
  );
}

export default App;
