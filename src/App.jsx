import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, MiddleModel } from './components';

const App = () => {

  return (
      <BrowserRouter>
        <div className="relative z-0 bg-black">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <MiddleModel />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
