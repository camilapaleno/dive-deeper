import Spline from '@splinetool/react-spline';
import HeroText from './dd-text.png';

export default function App() {
  return (
    
    <div className='wrapper'>
      <Spline className='spline' scene="https://prod.spline.design/fWh0CILE7DX5RFh8/scene.splinecode" />

      <nav>

        <ul class="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>


        <ul class="nav-links">

            <li>&#x2734;</li>
        </ul>

      </nav>

      <section class="hero">
          <div class="container">
           
              <img src={HeroText}></img>
              <img src={HeroText}></img>
              <img src={HeroText}></img>
              <p>
                Immerse yourself in a world of intrigue and beauty as we unveil the extraordinary – because beneath the surface lies a cinematic universe waiting to be discovered. Join us in the exploration of the unknown, where the ocean's enigma becomes an immersive, visual experience. 

                
              </p>
              <br/>
              <h2>&#x2734; &#x2734; &#x2734;</h2>

          </div>
      </section>

    </div>
  );
}
