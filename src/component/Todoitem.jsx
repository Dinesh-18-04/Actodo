import React from "react";
import { MdDelete } from "react-icons/md";

const Todoitem = (props) => {
    const list = props.list;
    const setlist = props.setlist;
    const handledelete = (deid) =>{
        var temparr = list.filter(function(item){
            if(item.id == deid){
                return false
            }
            else{
                return true
            }
        })
        setlist(temparr)
    }

  return (
    <div className="flex justify-between mb-2">
      <p className="text-xl">
        {props.index + 1}. {props.item.activity}
      </p>
      <MdDelete  onClick={()=>handledelete(props.id)} className="bg-white cursor-pointer text-2xl text-red-600 font-bold p-0.5 rounded-lg" />
    </div>
  );
};

export default Todoitem;
