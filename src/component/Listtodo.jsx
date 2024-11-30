import React, { useState } from 'react'
import Todoitem from './Todoitem'

const Listtodo = (props) => {
    const list = props.list
    const setlist = props.setlist
  return (
    <div className='bg-green-700 flex-grow text-white p-5 rounded-lg'>
      <h1 className='md:text-2xl text-xl font-bold'>Today's Activity:</h1>
      {list.length == 0 ?<p className='md:text-xl'>you haven't done anything !!</p>:"" }
      {
        list.map(function(item , index){
            return( <Todoitem id ={item.id} item={item} list={list} setlist={setlist} index={index}/>)
        })
      }
    </div>
  )
}

export default Listtodo
