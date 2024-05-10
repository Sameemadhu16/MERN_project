import React, {useState} from "react";
import axios from "axios";

export default function AddStudent(){

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendDate(e){
    e.preventDefault();
    
    const newStudent ={
      name,
      age,
      gender
    }
    
    axios.post("http://localhost:8070/student/add",newStudent ).then(()=>{
      alert("Student Added")
      

    }).catch((err)=>{
      alert(err)
    })
  }



    return(
        <div className="container">
            <form onSubmit={sendDate}>
            <div className="form-group">

              <label for="name">Student Name</label>
              <input type="text" className="form-control" id="name"  placeholder="Enter Student Name"
              onChange = {(e)=>{
                setName(e.target.value);

              }} />

            </div>

            <div className="form-group">

              <label for="age">Student Age</label>
              <input type="text" className="form-control" id="age"  placeholder="Enter Student Age"
              onChange = {(e)=>{
                setAge(e.target.value);

              }} />

            </div>

            <div className="form-group">

              <label for="gender">Student Gender</label>
              <input type="text" className="form-control" id="gender"  placeholder="Enter Student Gender"
              onChange = {(e)=>{
                setGender(e.target.value);

              }} />

            </div>

            
  
            <button type="submit" className="btn btn-primary">Submit</button>

           </form>
        </div>
    )
}