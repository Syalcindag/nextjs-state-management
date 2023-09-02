import React from 'react'

const ShowDetailsDesc = ({children}) => {
  return (
    <>
        <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            >
                <div className="accordion-body" style={{height: "250px", "background-color":"gray"}}>
                {children}
                </div>
        </div>
    </>
  )
}

export default ShowDetailsDesc