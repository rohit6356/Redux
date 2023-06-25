import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreater } from '../state/index'


const Products = () => {
  const Dispatch = useDispatch();
  // const {removeQuantity ,addQuantity }= bindActionCreators(actionCreater , Dispatch);
  const {depositMoney ,withdrawMoney }= bindActionCreators(actionCreater , Dispatch);
  
  return (
    <div>
        <img className='mt-3' style={{height:"150px" , width : "220px"}} src="https://rukminim1.flixcart.com/image/850/1000/xif0q/shoe/u/5/k/-original-imaggcb5dby2zbrj.jpeg?q=20" alt="" />
      <h2>buy adidas shoes</h2>
<button type='submit'className='btn btn-primary' onClick={()=>withdrawMoney(1000)}> - </button>
<span className='mx-4'> add to cart</span>
<button type='submit'className='btn btn-primary' onClick={()=>depositMoney(1000)}> + </button>
{/* <button type='submit'className='btn btn-primary' onClick={()=>removeQuantity(1)}> - </button>
<span className='mx-4'> add to cart</span>
<button type='submit'className='btn btn-primary' onClick={()=>addQuantity(1)}> + </button> */}
      
    </div>
  )
}

export default Products
