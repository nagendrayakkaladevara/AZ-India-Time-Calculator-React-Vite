import './App.css'
import TimeCalculator from './TimeCalculator'

function App() {

  return (
    <>
      <div>
        <p style={{ display: 'flex', justifyContent: 'center', fontWeight: "800", alignItems: 'center', gap: "10px", fontSize:"25px" }} className='bungee-tint-regular'>Arizona - India Time Calculator  <picture>
          <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.webp" type="image/webp" />
          <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.gif" alt="😉" width="32" height="32" />
        </picture></p>
        <TimeCalculator />
      </div>
    </>
  )
}

export default App
