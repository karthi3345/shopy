import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./Navbar.css"

const Navbar = ({size ,setShow}) => {
  return (
   <nav>
     <div className='nav_box' onClick={()=>setShow(true)}>
        <span className='my_shop'>
            Myshopping

        </span>
        <div className='cart' onClick={()=>setShow>(false)}>
       <span>
       < AddShoppingCartIcon/>
       </span>
        <span>
            {size}
        </span>
        </div>
      
      </div>
   </nav>
  )
}

export default Navbar
