import React from 'react'

const Icon = ({className, children}) => {
  return (
    <div className={` border rounded-full flex items-center justify-center cursor-pointer ${className}`}>{children}</div>
  )
}

export default Icon