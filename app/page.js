'use client'
import { useEffect } from "react";

import PaymentType from "./components/paymenttype";


export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <div className="container">
        
        <PaymentType/>

      </div>
      
    </>
  ) 
}
