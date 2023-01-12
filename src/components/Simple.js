// import logo from './logo.svg';
// import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../App.css';
import { HiOutlineExternalLink }  from "react-icons/hi";

function App() {
  useEffect(() => {
    AOS.init()
  })

  const data = [
        {   
            "id": 1,
            "Title": "KANETSU MANUFACTURE PROJECT",
            "Client": "PT. Kanetsu Tekno",
            "Based": "Vue.js, CSS TAILWIND",
            "image": "https://uploads-ssl.webflow.com/63640793650a2e24af80903e/63709a72b73c8d0ddd709131_COMP_iMac-p-1600.jpg",
        },
        {
            "id": 2,
            "Title": "PRIUK PERKASA ABADI PROJECT",
            "Client": "PT. Priuk Perkasa Abadi",
            "Based": "Vue, Typescript, CSS TAILWIND",
            "image": "https://uploads-ssl.webflow.com/63640793650a2e24af80903e/636412e3a7a05b026fc45542_Meridian%20Case%20Study%201-p-1600.jpg",
        },
        {
            "id": "3",
            "Title": "GRADASI DINAMIKA SINERGI",
            "Client": "PT. GRADASI DINAMIKA SINERGI",
            "Based": "Vue, Typescript, CSS TAILWIND",
            "image": "https://uploads-ssl.webflow.com/63640793650a2e24af80903e/63641315a564c516fb48c10c_COMP%20QM%20Mobile-p-1600.jpg",
        },
        {
            "id": 4,
            "Title": "SIMAK ASSAKINAH",
            "Client": "MADRASAH ALIYAH ASSAKINAH",
            "Based": "CodeIgniter, PHP, Bootstrap",
            "image": "https://uploads-ssl.webflow.com/63640793650a2e24af80903e/6370870818cd9ce3dd9ab584_COMP_Kindred-p-1600.jpg",
          },
          {
            "id": 5,
            "Title": "CARISMA MOBILE APP",
            "Client": "Colleges Project (uncontinued)",
            "Based": "Android Java",
            "image": "https://uploads-ssl.webflow.com/63640793650a2e24af80903e/6368b20f77892450dfa02d13_Stephen%20Zane%20Website%20iPhone%2012%20Mockup-p-1600.jpg",
        },
    ]

  return (
    <div className='w-screen h-screen bg-white overflow-x-hidden md:overflow-x-hidden lg:overflow-x-hidden overflow-y-visible lg:overflow-y-hidden'>
      <div className='flex flex-col md:flex-col lg:flex-row gap-2 h-auto lg:h-full'>
        <div className='flex-none w-full md:w-full lg:w-3/12 h-auto md:h-full lg:h-full'>
          <div className='m-2 h-full w-full'>
            <div className='flex flex-col gap-2' style={{height: '80%'}}>
              <div className='flex-none h-1/2 m-7 text-black text-justify font-normal'>
                <div className='text-sm'>Ridwan Maulana</div>

                <div className='text-sm mt-4'>
                  Lifelong Frontend Developer, UI Designer, web designer, creative maker, and internet entrepreneur based in Jakarta, Indonesia. I help to create companies system websites that paint a clear and compelling picture of why their work matters. My approach focuses on balance: Shaping a gret experience that feels natural, but professional; aesthetic, but effective.
                </div>

                <div className='mt-8 w-full'>
                  <div className='text-xs text-gray-400 my-2'>Based Programming Language:</div>
                  <table className='w-full text-xs'>
                    <tr className='h-8'>
                      <td>Vue</td>
                      <td>Javascript</td>
                    </tr>

                    <tr className=''>
                      <td>React</td>
                      <td>Typescript</td>
                    </tr>
                  </table>

                </div>

              </div>

              <div className='flex-none h-8 mt-0 lg:mt-0 mx-10'>
                <div className='border-t border-gray-200 h-8'></div>
              </div>

              <div className='flex-grow mt-2 md:mt-4 lg:mt-0 text-black'>
                <div className='text-xs'>Experience</div>
                <div className='m-4 mt-8'>
                  <div className='text-left text-xs font-medium'>- PT. Dirgantara Indonesia (PERSERO)</div>
                  <div className='text-left text-xs ml-3 text-gray-400'>WEB DEVELOPER (3 Months)</div>

                </div>

                <div className='m-4 mt-8'>
                  <div className='text-left text-xs font-medium'>- PT. Virgo Permata Solusindo</div>
                  <div className='text-left text-xs ml-3 text-gray-400'>FRONTEND DEVELOPER (2 Year)</div>
                </div>

              </div>

              <div className=' none flex-grow m-4 mt-4 lg:mt-10  w-full h-full'>
                <button className='bg-white hover:bg-gray-100 border rounded-md  text-black text-xs outline px-24 md:px-12 lg:px-36 py-2 mr-10 md:mr-0 lg:mr-0'> SAY HELLO! </button>
              </div>
            </div>
          </div>
        </div>
        

          <div className='cursor-pointer flex-grow md:flex-grow lg:col-span-2 h-auto md:h-full lg:h-full overflow-x-hidden text-center' >
            {data.map((x, y) => (
              <div key={x.id} className='mx-2 my-6 flex flex-row justify-center'>
                <div className='container flex flex-row justify-center'>
                  <img alt='images'  width={'90%'} className='object-fill' src={x.image} style={{height: 'auto'}} />  
                  <div className='middle' style={{ width: '90%', height: '100%' }}>
                    <div className='m-6 h-full'>
                      <div className='text-md text-justify font-semibold'>{x.Title}</div>
                      <div className='text-sm text-justify text-gray-300'>{x.Based}</div>
                      <div className='text-xs text-justify text-gray-400 mt-1'>{x.Client}</div>
                      <div style={{height: '80%'}} className="flex flex-col justify-end"><HiOutlineExternalLink /></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

            {/* <div className='mx-2 my-6 flex flex-row justify-center h-3/3'>
              <img alt='images'  width={'90%'} className='object-fill' src='https://uploads-ssl.webflow.com/63640793650a2e24af80903e/636412e3a7a05b026fc45542_Meridian%20Case%20Study%201-p-1600.jpg' style={{height: 'auto'}} />  
            </div>

            <div className='mx-2 my-6 flex flex-row justify-center h-3/3'>
              <img alt='images'  width={'90%'} className='object-fill' src='https://uploads-ssl.webflow.com/63640793650a2e24af80903e/63641315a564c516fb48c10c_COMP%20QM%20Mobile-p-1600.jpg' style={{height: 'auto'}} />  
            </div>

            <div className='mx-2 my-6 flex flex-row justify-center h-3/3'>
              <img alt='images'  width={'90%'} className='object-fill' src='https://uploads-ssl.webflow.com/63640793650a2e24af80903e/6368b20f77892450dfa02d13_Stephen%20Zane%20Website%20iPhone%2012%20Mockup-p-1600.jpg' style={{height: 'auto'}} />  
            </div>

            <div className='mx-2 my-6 flex flex-row justify-center h-3/3'>
              <img alt='images'  width={'90%'} className='object-fill' src='https://uploads-ssl.webflow.com/63640793650a2e24af80903e/6370870818cd9ce3dd9ab584_COMP_Kindred-p-1600.jpg' style={{height: 'auto'}} />  
            </div> */}
      </div>

    </div>
  );
}

export default App;
