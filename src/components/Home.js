// import logo from './logo.svg';
// import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div className="bg-white h-full mx-4 pt-2 w-full">
      <div className="grid grid-cols-4 gap-3 h-[42rem] m-5 mt-20">
        {/* PROFILE BAR */}
        <div className="flex flex-col gap-3">
          <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="100" className="flex-none bg-gray-200 rounded-xl hover:animate-pulse hover:bg-gray-50 " style={{height: '30%'}}>
            <div className="flex flex-col justify-items-center h-full text-">
              PROFILE
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="300" className="flex-grow bg-gray-200 rounded-xl">
            <div className="flex flex-col justify-items-center h-full">
              PROFILE
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="500" className="flex-grow bg-gray-200 rounded-xl">
            <div className="flex flex-col justify-items-center h-full">
              PROFILE
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="120" className="flex-none bg-gray-200 rounded-xl" style={{height: '35%'}}>
            <div className="flex flex-col justify-items-center h-full">
              PROFILE
            </div>
          </div>

        </div>

        {/* PORTOFOLIO BAR */}
        <div className=" col-span-2">
          <div className="flex flex-col gap-3 h-full">
            {/* top p-bar */}
            <div className="flex-none" style={{height: '25%'}}>
              <div className="grid grid-cols-2 h-full gap-2">
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="200" className="bg-gray-200 rounded-xl">
                  a1
                </div>

                <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="150" className="bg-gray-200 rounded-xl">
                  a2
                </div>
              </div>
            </div>

            {/* middle p-bar */}
            <div className="flex-none" style={{height: '50%'}}>
              <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="300" className="bg-gray-200 rounded-xl h-full">
                  b
              </div>
            </div>

            {/* bottom p-bar */}
            <div className="flex-grow h-full">
              <div className="flex flex-row h-full gap-2">
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="200" className="flex-grow bg-gray-200 rounded-xl">
                  c1
                </div>

                <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="200" className="flex-none bg-gray-200 rounded-xl w-[60%]">
                  c2
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-2 ">
          <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="250" className="bg-gray-200 rounded-xl flex-grow h-[15%]">
            c1
          </div>

          <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="120" className="bg-gray-200 rounded-xl flex-none h-[35%]">
            c2
          </div>

          <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="300" className="bg-gray-200 rounded-xl flex-none h-[40%]">
            c3
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
