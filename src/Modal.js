
import './App.css';
import React, {useState} from 'react'

function Modal() {
  const[open, setOpen]=useState(false);
  
  const openForm=()=>{
    setOpen(true);
  }

  const closeForm=()=>{
    setOpen(false)
  }

  const handlesubmit=(e)=>{
    e.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
  const contact=document.getElementById("phone");
  const phoneNum=contact.value

  const dateofBirth=document.getElementById("dob");
  const currentdate=new Date();
  const enterdate=new Date(dateofBirth).value;

  if (!email || !username || !phoneNum || !enterdate ) {
    alert("Please Enter all fields are required.");
    return;
  }
  if(phoneNum.length !==10 || isNaN(phoneNum)){
    alert("Invalid Phone number. Please enter a 10-digit phone number. ")
    return
  }
 
  if(enterdate>currentdate){
    alert("Invalid date of birth. Date of birth cannot be in the fututre");
    return
  }


  setOpen(false);

  }
  return (
    <div className="App">
      <h1>User Details Modal</h1>
      {!open &&(
        <button type="button" className="submit-button" onClick={openForm}>Open Form</button>
      )}
      {open && (
      <div className="modal" onClick={closeForm}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

   <h2>Fill Details</h2>
   <form open={open} action="">
   <div className="form-group">
   <label>Username:</label>
   <input type="text" id="username" required/>
   </div>
   <div className="form-group">
   <label>Email Address:</label>
   <input type="email" id="email" required/>
   </div>
  
   <div className="form-group">
   <label>Phone Number:</label>
   <input type="tel" id="phone" required/>
   </div>
   
   <div className="form-group">
   <label>Date of Birth:</label>
   <input type="date" id="dob" required/>
   </div>
  
   <button type="submit" className="submit-button" onClick={handlesubmit}>Submit</button>
    </form>
   </div>
  </div>
    )}
    </div>
  );
}

export default Modal;
