import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    
    <div className='wrapper'>
      <Spline className='spline' scene="https://prod.spline.design/fWh0CILE7DX5RFh8/scene.splinecode" />

      <nav>

        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <ul class="nav-links">
            <li><a href="#">&#x274B;</a></li>
            <li><a href="#">&#x272D;</a></li>
            <li><a href="#">&#x273A;</a></li>
            <li><a href="#">&#x2739;</a></li>
        </ul>

      </nav>

      <section class="hero">
          <div class="container">
              <h1>DIVE DEEPER.</h1>
              <p>Immerse yourself in a world of intrigue and beauty as we unveil the extraordinary – because beneath the surface lies a cinematic universe waiting to be discovered. Join us in the exploration of the unknown, where the ocean's enigma becomes an immersive, visual experience. </p>
          </div>
      </section>

    </div>
  );
}
