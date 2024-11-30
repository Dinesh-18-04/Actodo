import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1 className='md:text-3xl text-2xl font-bold'>Welcome {props.username}</h1>
      <p className='md:text-xl mt-2 font-semibold'>I help you to manage your activities!!</p>
    </div>
  )
}

export default Header
