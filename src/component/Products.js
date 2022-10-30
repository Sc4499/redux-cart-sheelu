import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cardslice';
import { fetchproductdata } from '../store/fetchprod';
import { STATUSES } from '../store/fetchprod';
const Products = () => {
  const dispatch = useDispatch();

  const {data:product ,status} = useSelector((state)=>state.product)
    //const [product,setPrduct]=useState([]);
    useEffect(()=>{
     dispatch(fetchproductdata())
     },[])
    const clickhandler = (product)=>{
      dispatch(add(product));
    }
if(status==STATUSES.LOADING){
 return <h6>Loading...</h6>
}
  return <>
  { product.map(item=>{
    return(
            <div className='col-md-3' key={item.id}>
            <div class="card text-center mb-4" style={{width: "14rem",height:"40vh"}}>
        <img src={item.image} class="card-img-top mt-2" style={{width:"40px",marginLeft:"90px"}} alt="..."/>
        <div class="card-body">
          <h6 class="card-title" style={{textOverflow:"---", whiteSpace: "nowrap",
        overflow:"hidden"}}>{item.title}</h6>
          <p>{item.category}</p>
          
        </div>
        <a onClick={()=>clickhandler(item)} class="btn btn-success m-auto mb-2 rounded-0">Add to cart</a>
      </div>
          </div>)
        })
    }
  </>
  
  
}

export default Products
