import React, { Children } from 'react'

const Buttons = ({ children }) => {
  return (
    <button className={`py-4 px-5 bg-mainclr text-txt hover:bg-secondary duration-200 font-DMsans`}>{children}</button>
  )
}

export default Buttons
