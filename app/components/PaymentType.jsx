import React from 'react'
import FlightDetails from './FlightDetails'
import ShowDetails from './ShowDetails'

const PaymentType = () => {
  return (
    <>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col'>
                <FlightDetails/>
                </div>
                <div className='col-auto'>
                    <ShowDetails/>
                </div>
            
            </div>
            <div className='row mt-3'>
            <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            >
            <div className="accordion-body" style={{height: "250px", "background-color":"gray"}}>
                Placeholder content for this accordion, which is intended to demonstrate
                the <code>.accordion-flush</code> class. This is the first item's
                accordion body.
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default PaymentType