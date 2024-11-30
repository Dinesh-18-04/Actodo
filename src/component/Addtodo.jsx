import React, { useState } from "react";

const Addtodo = (props) => {
  const list = props.list;
  const setlist = props.setlist;
  const [temp,settemp] = useState("")

  function handlechange(event) {
    settemp(event.target.value)
  }
  function handleclick() {
    setlist([...list,{id:list.length+1,activity:temp}])
    settemp("")
  }
  return (
    <div>
      <h1 className="md:text-2xl text-xl font-bold">Manage Activity:</h1>
      <div className="md:my-5 my-1">
        <input
          onChange={handlechange}
          value={temp}
          type="text"
          className="border border-black py-1 rounded-s-md "
        />
        <button
          onClick={handleclick}
          className="bg-black rounded-e-md text-white border border-black py-1 px-3 font-semibold"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Addtodo;
