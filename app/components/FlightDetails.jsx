import React from 'react'
import './flight.css'

const FlightDetails = () => {
  return (
    <>
        <div className="card">
            <h5 className="card-header">ECONOMY - ExtraFly</h5>
            <div className="card-body p-0 px-3 py-2">
                <div className='row justify-content-between'>
                    <div className='col-md-auto'> 
                        <p className='fw-light fs-11 m-0 mb-1'>FROM</p>
                        <p className='fs-14 m-0 mb-1'>Istanbul (IST)</p>
                        <p className='fw-light fs-11'>12 Sep Tue * 01:10</p>
                    </div>
                    <div className='col-4 m-0 align-self-center justify-content-center'> 
                        <div className='row justify-content-center '>
                            <img src="https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_tk.png" alt=""  className='w-auto' />
                        </div>
                        <hr />
                        <div className='row justify-content-center '>
                            <p className='w-light fs-11 w-auto'>1h 30m</p>
                        </div>
                        
                    </div>
                    <div className='col-md-auto'>
                        <p className='fw-light fs-11 m-0 mb-1'>TO</p>
                        <p className='fs-14 m-0 mb-1'>Adana (ADA)</p>
                        <p className='fw-light fs-11'>12 Sep Tue * 02:50</p></div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default FlightDetails