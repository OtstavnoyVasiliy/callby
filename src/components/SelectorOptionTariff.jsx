import React, {useEffect, useState} from "react";
import {addSelected,removeSelected} from "../redux/slices/selectedSlice";
import {useDispatch, useSelector} from "react-redux";

const SelectorOptionTariff=({id , title , price})=>{
    const {selectedItems}=useSelector(state => state.selected)
    const [checked,setChecked]=useState(false) //Todo to useEffect +
    const dispatch=useDispatch()
    useEffect(() => {
        setChecked(selectedItems.find(item=>item.id===id)!==undefined)
    },[])

    const toggleCheckedItem = () => { //отступы +
        if(!checked){
            dispatch(addSelected({id,title,price}))
        }
        else{
            dispatch(removeSelected(id))
        }
        setChecked(!checked)
    }
    return(
        <li className="selector_item">
            <div className="selector_name" onClick={toggleCheckedItem}>{title}</div>
            <div className={checked ? "select_circle selected": "select_circle"} onClick={toggleCheckedItem}>
                {checked && <img src="/img/small_img/check_white.svg" alt="" className="selected_img"/>}
            </div>
        </li>
    )
}
export default SelectorOptionTariff