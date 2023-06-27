import React, {useEffect, useState, useRef} from "react";
import { useDispatchCart, useCart } from "./addcart";
export default function Card(props) {
  let dispatch = useDispatchCart();
  let data= useCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const priceRef = useRef();
  const [qty, setQty] =useState(1)
  const [size, setSize] =useState("")
  let handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
         food = item;
         break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }
    await dispatch({type: "ADD", id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, size:size})
    //console.log(data)
  }
  let finalPrice =  qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
    }, [priceRef])
  return (

    <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", height: "360px" }}
        >
          <img src={props.foodItem.img} style={{width: "100%", height: "100%", overflow: "hidden"}} className="card-img-top" alt="..." />
          <div className="card-body">
             <h5 className="card-title">{props.foodItem.name}</h5> 
            <div className="container w-100">
              <select className="m-2 h-100  bg-success-rounded" onChange={(e)=> setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success-rounded" ref={priceRef} onChange={(e)=> setSize(e.target.value)}> 
               {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                }
                )
               }
              </select>
              <div className="d-inline h-100 fs-4"> ₹{finalPrice}/-</div>
            </div>
            <hr></hr>
            <button className="btn btn-success w-100 justify-center " onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
  );
}
