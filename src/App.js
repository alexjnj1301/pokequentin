import React, { useState } from "react";
import logo from './denis.png';
import './App.css';
import Header from './components/atoms/Header/Header';
import PokeQuentinApi from './components/atoms/API/PokeQuentinApi';
import Banner from './components/atoms/Banner/Banner';

function App() {
  const header = "Bonjour je suis un Header";
  const [bannerData, setBannerData] = useState(<Banner title={"Bonjour je suis une bannière"} color={'red'} bgColor={'black'}/>);
  const [theme, setTheme] = useState();

  return (
    <div className={`App ${theme}`}>
      <Header title={header} setBannerData={setBannerData}/>
      {bannerData}
      <body>
        <img src={logo} alt="logo" />
        <PokeQuentinApi setTheme={setTheme}/>
        {theme}
      </body>
    </div>
  );
}

export default App;
