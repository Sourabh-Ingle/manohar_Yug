import React from 'react';
import './App.css';
import { onlyimg, product, imgonly, product2, machinary,onlyimg1,product3,product4 } from "./Components/Data"
import About from "./Components/About"
import HeaderNav from "./Components/HeaderNav/HeaderNav";
import Onlyimg from './Components/Onlyimg';
import Product from './Components/Product';
import AdvanceMachine from './Components/AdvanceMachine'
import Product2 from './Components/Product2';
import Product3 from './Components/Product3';
import Product4 from './Components/Product4';
import {ScrollText,ScrollText1,Subscribe } from './Components/ScrollText';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';



function App() {
  return (
    <div className="App">

      <HeaderNav />

      <Slider/>

      <ScrollText />

      <About />

      <Product product={product} title='Organic Farming'/>

      <Onlyimg onlyimg={onlyimg} />

      <AdvanceMachine imgonly={imgonly} />

      <Product2 product={product2} />

      <Product3 product={machinary} />

      <Onlyimg onlyimg={onlyimg1} />

      <Product product={product3} title='Top seasonal agriculture seeds' />

      <ScrollText1 />

      <Onlyimg onlyimg={onlyimg} />

      <Product4 product={product4} title='Mostly Recommended Farming Products'/>

      <Subscribe />

      <Footer />



    </div>
  );
}

export default App;
