import './App.css';
import DSLRImage from './Canon1.webp';
import ProductQuantity from './Product';

function App() {
  return (
    <div>
    <img src={DSLRImage} alt="Canon Camera"  class="center"/>
    <h1>Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens  (Black)</h1>
    <div class="price">Per Product Price &#x20b9;30,999</div>
    <div class="PQ"><ProductQuantity/></div>
    <div class = "camera-detail">
        <h2>About this item: </h2>
        <p>Canon EOS 3000D DSLR Camera is featuring an 18 MP (APS-C) CMOS sensor and the DIGIC 4+ imaging processor, you can capture amazing photos of your subject at all times, even in low-light conditions. Moreover, the remote Live View function lets you control this camera remotely using your smartphone so you can capture amazing photos even from a distance</p>
        <p><b>In The Box  </b>
         1 Camera Body, 18 - 55 mm Lens, Battery, Battery Charger</p>
        <ul>
          <li>Color: <span>Black</span></li>
          <li>Available: <span>in stock</span></li>
          <li>Category: <span>Cameras</span></li>
          <li>Shipping Area: <span>All over India</span></li>
          <li>Shipping Fee: <span>Free</span></li>
        </ul>
      </div>

    </div>
  );
}

export default App;
