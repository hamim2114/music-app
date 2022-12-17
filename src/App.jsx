import Download from './components/Download'

import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Search from './components/Search'
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experience from './components/Experience'
AOS.init();

function App() {

  return (
    <div className='text-white  overflow-hidden'>
      <Header/>
      <Hero/>
      <Experience/>
      <Search/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default App
