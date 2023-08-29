import React from 'react'

const ShowDetails = () => {
  return (
    <>
     <div className="accordion accordion-flush h-100" id="accordionFlushExample">
        <div className="accordion-item h-100">
            <h2 className="accordion-header h-100" id="flush-headingOne">
            <button
                className="accordion-button collapsed h-100 align-middle justify-content-center rounded"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
            >
                <p className='fs-14 fw-light m-0'>Show Details</p>
            </button>
            </h2>
           
        </div>
    </div></>
  )
}

export default ShowDetails