import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './Footer';

import { useEffect, useState } from 'react'

export default function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  console.log(theme);

  function toggle() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  })
  return (
    <div className="">
      <nav
        className='nav-bar mb-4'>
        <img
          src={reactLogo}
          alt='react-logo' />
        <ul
          className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className='btn btn-outline-dark' onClick={toggle}>Theme</button>
      </nav>
      <Footer />
    </div>
  )
}


