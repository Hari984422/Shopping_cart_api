import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../styles/additms.css'
import {  useState } from 'react';
import axios from 'axios';

const AddItems = () => {
  let [brand,setbrand] = useState("")
  let [category,setcategory] = useState("")
  let [name,setname] = useState("")
  let [cost,setmrp] = useState("")
  // let [discount,setdiscount] = useState("")
  let [imageurl,setimageurl] = useState("")
  let [description,setdescription] = useState("")

   let loadData = (e)=>{
    e.preventDefault();
    let data = {category,name,cost,imageurl,brand,description};
    let admin = JSON.parse(localStorage.getItem("currentMerchant"));
    axios.post(`http://localhost:8080/products/${admin.id}`,data)
    .then((res)=>{
    console.log(res);

                alert("Added Item Successfully");
              })
    .catch(()=>{
      alert("Invalid Data")
    })
   }

    return ( 
        <div className="Additmes">
            <br />
             <Form.Select value={category}  onChange={(e)=>{setcategory(e.target.value)}}  aria-label="Default select example">
      <option  >One</option>
      <option >Two</option>
      <option >Three</option>
    </Form.Select>
    <br />
    <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Product Name :
        </InputGroup.Text>
        <Form.Control  value={name} onChange={(e)=>{setname(e.target.value)}}  
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        MRP Price :
        </InputGroup.Text>
        <Form.Control value={cost} onChange={(e)=>{setmrp(e.target.value)}}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Brand :
        </InputGroup.Text>
        <Form.Control value={brand} onChange={(e)=>{setbrand(e.target.value)}}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Thumbnail URL:
        </InputGroup.Text>
        <Form.Control value={imageurl} onChange={(e)=>{setimageurl(e.target.value)}}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Description  :
        </InputGroup.Text>
        <Form.Control value={description} onChange={(e)=>{setdescription(e.target.value)}}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <button onClick={loadData}  className='btn btn-info px-5 m-3'>Add Itmes</button>
        </div>


     );
}
 
export default AddItems;