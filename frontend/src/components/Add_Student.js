import React, {useState} from "react";

export default function AddStudent(){

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");



    return(
        <div className="container">
            <form>
            <div className="form-group">

              <label for="Name">Student Name</label>
              <input type="text" className="form-control" id="Name"  placeholder="Enter Student Name"
              onChange = {(e)=>{
                setName(e.target.value);

              }} />

            </div>

            <div className="form-group">

              <label for="Age">Student Age</label>
              <input type="text" className="form-control" id="Age"  placeholder="Enter Student Age"
              onChange = {(e)=>{
                setAge(e.target.value);

              }} />

            </div>

            <div className="form-group">

              <label for="Gender">Student Gender</label>
              <input type="text" className="form-control" id="Gender"  placeholder="Enter Student Gender"
              onChange = {(e)=>{
                setGender(e.target.value);

              }} />

            </div>

            
  
            <button type="submit" className="btn btn-primary">Submit</button>

           </form>
        </div>
    )
}