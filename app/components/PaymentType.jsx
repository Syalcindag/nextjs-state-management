import React from 'react'
import FlightDetails from './FlightDetails'
import ShowDetailsButton from './ShowDetailsButton'
import ShowDetailsDesc from './ShowDetailsDesc'

const PaymentType = () => {
  return (
    <>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col'>
                    <FlightDetails/>
                </div>
                <div className='col-auto'>
                    <ShowDetailsButton/>
                </div>
            
            </div>
            <div className='row mt-3'>
              <ShowDetailsDesc>
                <p>This is a child</p>
              </ShowDetailsDesc>
            </div>
        </div>
    </>
  )
}

export default PaymentType