import React, { useContext, useState } from 'react';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import { SHOP_DATA } from '../shop_data';

const Home = () => {
    const products = SHOP_DATA;

  return (
    <div className="home"> <div className= "product_container">{products.map(product => <SingleProduct product={product} key={product.id}/>)}</div></div>
  )
}

export default Home