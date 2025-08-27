import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const gotoDetail = (item) =>{
    navigate(`/product/${item.id}`)
  }
  return (
    <div className='productCard' onClick={()=>{gotoDetail(item)}}>
        <img src={item?.img} alt="none" />
        <div>{item?.choice == true? "Consicous choice": ""} </div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new == true? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard