import { Contact, Intro, Menu, Portfolio, Testimonials, TopBar, Works } from './components';
import './app.scss';
import { useState } from 'react';

const App = () => {

  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className='app'>

      <TopBar menuOpen={menuOpen} setMenuOpen={setmenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setmenuOpen} />

      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>


    </div>
  )
}

export default App