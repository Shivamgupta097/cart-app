import React from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Headers = () => {
  return (
    <nav>
       <Link to="/">Shopify</Link>
      <Link to="/cart"> <AiOutlineShopping className="btn position-relative p-0" style={{fontSize:"2rem"}}/></Link>
       <span className="position-absolute top-0 start-100 translate-middle badge btn-primary">5</span>

    </nav>
  )
}

export default Headers