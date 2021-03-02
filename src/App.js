import { useState, useEffect, useLayoutEffect } from 'react'
import Header from './components/Header'
import FixedNav from './components/FixedNav'
import Main from './components/Main'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScrolling = () => {
    setScrollPosition(window.pageYOffset)
  }

  window.addEventListener('scroll', handleScrolling)

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
