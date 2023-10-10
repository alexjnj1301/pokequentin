import React, { useState } from "react";
import logo from './denis.png';
import './App.css';
import Header from './components/atoms/Header/Header';

function App() {
  const header = "Bonjour je suis un Header";
  const [bannerData, setBannerData] = useState(null);

  return (
    <div className="App">
      <Header title={header} setBannerData={setBannerData}/>
      {bannerData}
      <body>
        <img src={logo} alt="logo" />
        <div className='buttonGroup'>
          caca
        </div>
      </body>
    </div>
  );
}

export default App;
