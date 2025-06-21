import {useState} from "react";
import "./App.css";

function App() {
  const [fullName,setFullName] = useState({
    firstName : "",
    lastName : ""
  })
  const [submit, setSubmit] = useState(false)
  const handleChange = (e)=> {
    const {name,value} = e.target;
    if(/^[a-zA-Z0-9!@$^]*$/.test(value) || value === "")
   { setFullName((prevFullName)=>({
      ...prevFullName,
      [name]: value,
    }))}
    
  }
  const handleSubmit = (e)=>{

    e.preventDefault()
    setSubmit(true)
    
  }
  return (
    <div className="App">
      <main>
        <h1>Full Name Display</h1>
      </main>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="fullname">Full Name: </label>
          <input type="text" name="firstName" value={fullName.firstName} onChange={handleChange} required/>
        </div>
        <div>
          <label for="lastname">Last Name: </label>
          <input type="text" name="lastName" value={fullName.lastName} onChange={handleChange} required/>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submit && <p>{`Full Name: ${fullName.firstName} ${fullName.lastName}`}</p>}
    </div>
  );
}

export default App;