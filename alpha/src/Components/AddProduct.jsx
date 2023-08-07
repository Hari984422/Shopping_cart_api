import axios from 'axios'
import  { useState } from 'react'

const AddProduct = () => {
    let [name,setname]=useState("")
    let [brand,setBrand]=useState("")
    let [description,setDescription]=useState("")
    let [category,setCategory]=useState("")
    let [cost,setcost]=useState("")
    let [image,setImage]=useState("")
    let handleSubmit=(e)=>{
        let merchant=JSON.parse(localStorage.getItem("currentUSer"))
        console.log(merchant)
e.preventDefault()
let prod={name,brand,category,description,cost,image}
axios.post(`http://localhost:8080/products/${merchant.id}`,prod)
    }
  return (
    <div className="usersignup">
            <form onSubmit={handleSubmit} action="">
                    <label htmlFor="">
                        Name: <input value={name} onChange={(e) => (setname(e.target.value))} placeholder="Enter name" type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Brand: <input value={brand} onChange={(e) => (setBrand(e.target.value))}  type="text" placeholder="Enter Brand" />
                    </label>
                    <label htmlFor="">
                    Description : <input value={description} onChange={(e) => (setDescription(e.target.value))} type="text" placeholder="Enter Description" />
                    </label>
                    <label htmlFor="">
                        Category : <input value={category} onChange={(e) => (setCategory(e.target.value))} type="text" placeholder="Enter category" />
                    </label>
                    <label htmlFor="">
                        Cost : <input value={cost} onChange={(e) => (setcost(e.target.value))} type="number" placeholder="Enter cost" />
                    </label>
                    <label htmlFor="">
                        Image URL : <input value={image} onChange={(e) => (setImage(e.target.value))} type="text" placeholder="Enter category" />
                    </label>
                    <button >Submit</button>
                </form>
        </div>

  )
}

export default AddProduct