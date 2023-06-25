import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreater } from '../state/index'

const Shop = () => {
  const Dispatch = useDispatch();
  const {depositMoney,withdrawMoney}= bindActionCreators(actionCreater , Dispatch);
  
  return (
    <div>
        <img className='mt-3' style={{height:"150px"}} src="https://s.yimg.com/uu/api/res/1.2/ceGP7covrkhDUABeCH3klQ--~B/Zmk9ZmlsbDtoPTU3Nzt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/images/dims?crop=1600%2C1055%2C0%2C0&quality=85&format=jpg&resize=1600%2C1055&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-07%2F35266310-ae47-11e9-9ffd-941d74484264&client=a1acac3e1b3290917d92&signature=ffc1ba94c3e3dd02adfbca62bb5a94d6800684c3.cf.jpg" alt="" />
        <h2>buy nike shoes</h2>
      {/* <button className='btn btn-primary' onClick={()=> {Dispatch(actionCreater.withdrawMoney(1000))}}>-</button>
      <span className='mx-2'>add to cart </span>
      <button className='btn btn-primary' onClick={()=> {Dispatch(actionCreater.depositMoney(1000))}}>+</button> */}
   
      <button className='btn btn-primary' onClick={()=> {withdrawMoney(1000)}}>-</button>
      <span className='mx-2'>add to cart </span>
      <button className='btn btn-primary' onClick={()=> {depositMoney(1000)}}>+</button>
    </div>
  )
}

export default Shop
