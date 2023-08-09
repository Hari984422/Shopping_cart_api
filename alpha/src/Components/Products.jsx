import axios from "axios";
import '../styles/product.css'
import { useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
const Products = () => {
    let [data1,setdata1] = useState([])
    let admin = JSON.parse(localStorage.getItem('currentMerchant'))
    useEffect(()=>{
        let fetchData =()=>{
        axios.get(`http://localhost:8080/products/${admin.id}`)
        .then((res)=>{
            setdata1(res.data.data)
        })
        .catch(()=>{
            alert("Not A GooD REQUEST")
        })
        }
        fetchData()
    },[])
    return ( 
        <div className="products">
            {data1.map((x)=>{
                return(
                    <div className="display">
                       <div className="image">
                        <img src={x.image} alt="" />
                       </div>
                       <div className="details">
                        <h2>{x.name}</h2>
                        <button className="btn btn-danger py-0">Get Freedom Sale</button>
                        <p><b>MRP:</b><strike>{x.cost}</strike>(12% off)</p>
                        <p><b>DiscountPrice:</b><h2>{x.cost * 12/100} <FavoriteIcon /> </h2> </p>
                        <button className="btn btn-outline-success">Add to Cart</button>
                       <p>{x.description}</p>
                       </div>
                      

                    </div>
                )
            })}
        </div>
     );
}
 
export default Products;