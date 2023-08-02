import axios from 'axios'
import  { useState } from 'react'

const AddProduct = () => {
    let [name,setname]=useState("")
    let [brand,setBrand]=useState("")
    let [description,setDescription]=useState("")
    let [category,setCategory]=useState("")
    let handleSubmit=(e)=>{
e.preventDefault()
let prod={name,brand,category,description}
axios.post("http://localhost:8081/products/1",prod)
    }
  return (
    <div className="usersignup">
            <form onSubmit={handleSubmit} action="">
                    <label htmlFor="">
                        Name: <input value={name} onChange={(e) => (setname(e.target.value))} placeholder="Enter name" type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Brand: <input value={brand} onChange={(e) => (setBrand(e.target.value))}  type="text" placeholder="Enter phone number" />
                    </label>
                    <label htmlFor="">
                    Description : <input value={description} onChange={(e) => (setDescription(e.target.value))} type="text" placeholder="Enter email" />
                    </label>
                    <label htmlFor="">
                        Category : <input value={category} onChange={(e) => (setCategory(e.target.value))} type="text" placeholder="Enter password" />
                    </label>
                    <button >Submit</button>
                </form>
        </div>

  )
}

export default AddProduct