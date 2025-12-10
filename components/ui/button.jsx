import React from 'react'

const Button = ({children,type}) => {
  return (
    <button className="inline-flex items-center bg-theme-light text-background font-semibold py-2 px-4 rounded-md ml-5 hover:bg-theme-dark transition">
          
          {children}
        </button>
  )
}

export default Button
