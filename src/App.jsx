import { useEffect, useState } from 'react'
import './App.css'
import TimeCalculator from './TimeCalculator'

function App() {


  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <p style={{ display: 'flex', justifyContent: 'center', fontWeight: "800", alignItems: 'center', gap: "10px", fontSize: "25px" }} className='bungee-tint-regular'>
          Arizona - India Time Calculator
          <picture>
            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.webp" type="image/webp" />
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.gif" alt="😉" width="32" height="32" />
          </picture>
        </p>
        <TimeCalculator />
        <div style={{ marginTop: 'auto', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "5px" }}>
          <p className='playwrite-pe' style={{ fontSize: "10px", display: 'flex', alignItems: 'center' }}>Every time you use this site, you need to give Nagendra a Hot Chocolate

            <picture>
              <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/2615/512.webp" type="image/webp" />
              <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2615/512.gif" alt="☕" width="22" height="22" />
            </picture>
            .
          </p>
        </div>
        <Counter />
      </div>

    </>
  )
}

export default App

const Counter = () => {
  const [visitCount, setVisitCount] = useState(0);
  console.log("🚀 ~ Counter ~ visitCount:", visitCount)

  useEffect(() => {
    // Check if this is the first render by seeing if the flag is 'false'
    let isFirstRender = localStorage.getItem('Arizona-India-Time-Calculator-firstRender') !== 'false';
    console.log("🚀 ~ useEffect ~ isFirstRender:", isFirstRender);

    if (isFirstRender) {
      let count = localStorage.getItem('Arizona-India-Time-Calculator-visitCount');
      console.log("🚀 ~ useEffect ~ count:", count);

      if (!count) {
        count = 1;
      } else {
        count = parseInt(count) + 1;
      }

      localStorage.setItem('Arizona-India-Time-Calculator-visitCount', count);
      setVisitCount(count);


      localStorage.setItem('Arizona-India-Time-Calculator-firstRender', 'false');
    }


    setTimeout(() => {
      localStorage.setItem('Arizona-India-Time-Calculator-firstRender', 'true');
    }, 1000);
  }, []);



  return (
    <>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <p className='playwrite-pe'>This is your visit number: {visitCount}</p>
      </div>
    </>
  )
}