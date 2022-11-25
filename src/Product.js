import React, { useState } from 'react'
import {Card,Button} from 'react-bootstrap';
import {list} from './Productdata'

const Product = () => {
  const[prod,setProd]=useState(list)
  const decqty=(id)=>{
    const newprod=prod.map((prod)=>
    prod.id===id && prod.qty>1?{...prod,qty:prod.qty-1}:prod)
    setProd(newprod)
  }
  const incqty=(id)=>{
    const newprod=prod.map((prod)=>
    prod.id===id?{...prod,qty:prod.qty+1}:prod)
    setProd(newprod)
  }
  return (
    <div>
      <h1 className='bg-info'>products</h1>
    {prod.map((prod)=>(
      <div className='d-inline-flex' key={prod.id}>
      <Card className="shadow p-3 mb-2 bg-white rounded" style={{ width: '13rem', height:'28rem'}}>
      <Card.Img className="" style={{ height: '10rem' }} variant="top" src={require(`./asset/${prod.image}.jpg`)}/>
      <Card.Body>
        <Card.Title className='text-primary'>{prod.model}</Card.Title>
        <Card.Text>
         {prod.desc}
        </Card.Text>
        <h5>price: ₹ {prod.price}</h5>
        <div>
          <p>
            Qty:
            <button onClick={()=>decqty(prod.id)} className='m-1'>-</button>{prod.qty}
            <button onClick={()=>incqty(prod.id)} className='m-1'>+</button>
          </p>
        </div>
        
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card></div>
    ))}
 

    </div>
  )
}

export default Product
