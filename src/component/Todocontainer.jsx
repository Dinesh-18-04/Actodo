import React from 'react'
import Addtodo from './Addtodo'
import Listtodo from './Listtodo'
import { useState } from 'react'

const Todocontainer = () => {
  const [list,setlist] = useState([
    
])
  return (
    <div className='flex gap-4 flex-wrap'>
        <Addtodo list={list} setlist={setlist}></Addtodo>
        <Listtodo list={list} setlist={setlist}></Listtodo>
    </div>
  )
}

export default Todocontainer
