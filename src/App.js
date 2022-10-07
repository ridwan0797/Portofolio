// import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="glass-card text-black absolute top-4 left-4">
          <div className='flex flex-row gap-0'>
          <div className=" flex-grow m-4 text-[18px] font-bold text-gray-500">
            RidwanMaulana / Home
          </div>

            <div className='flex-none w-16 '>
              <div className='flex flex-row m-4'>
                <IoIosArrowBack className='text-gray-500 cursor-pointer bg-transparent hover:bg-gray-200 hover:rounded-xl' />
                <IoIosArrowForward className='text-gray-500 cursor-pointer bg-transparent hover:bg-gray-200 hover:rounded-xl' />
              </div>
            </div>
          </div>
        </div>
        
        <Home></Home>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
