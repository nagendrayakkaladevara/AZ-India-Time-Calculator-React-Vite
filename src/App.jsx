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
          <p className='playwrite-pe' style={{ fontSize: "10px", display: 'flex', alignItems: 'center' }}>Every time you use this site, you need to give Nagendra an Hot Chocolate

            <picture>
              <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/2615/512.webp" type="image/webp" />
              <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2615/512.gif" alt="☕" width="22" height="22" />
            </picture>
            .
          </p>
        </div>
      </div>

    </>
  )
}

export default App
