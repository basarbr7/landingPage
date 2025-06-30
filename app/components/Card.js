import React from 'react'

const Card = ({className, children}) => {
  return (
    <div className={`rounded-[30px] ${className}`}>{children}</div>
  )
}

export default Card