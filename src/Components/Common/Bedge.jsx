
import React from 'react'

const Bedge = ({ className, badgeName }) => {
  return (
    <div className={`bg-mainclr text-[14px] text-white py-3 text-center w-22.5 ${className}`}>
      {badgeName}
    
    </div>
  )
}

export default Bedge

