import { useState } from "react"
import axios from "axios";
import '../styles/product.css'
import { useEffect } from "react";
const ViewProducts = () => {
    let [data,setdata] = useState([])
    useEffect(()=>{
        let fetchData =()=>{
        axios.get(`http://localhost:8080/products`)
        .then((res)=>{
            console.log(res.data.data);
            setdata(res.data.data)
        })
        .catch(()=>{
            alert("Not A GooD REQUEST")
        })
        }
        fetchData()
    },[])
    return ( 
        <div className="view">
 {data.map((x)=>{
                return(
                    <div className="mobile">
                        <div className="image">
                            <img src={x.image} alt="" />
                        </div>
                        <div className="details">
                            <h1>{x.brand}</h1>
                            <span>Flat INR 2000 Off on ICICI CreditCar…</span>
                            <h2>{x.name}</h2>
                            <p>MRP Price: <strike>{x.cost}</strike></p>
                            <button className="btn btn-danger py-0 px-5">DEAL OF THE DAY</button>
                            <p>Discount Price: <h3 id="discount">{x.cost - (x.cost * 12/100)}</h3></p>
                            <button  className="btn btn-success">Add to Cart</button>
                        
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default ViewProducts;