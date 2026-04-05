import axios from "axios";
import { useState } from "react";
function Tester() {
  const [tester,setTester] = useState("");
  const testing = async() =>{
    try{
      const res = await axios.get("http://localhost:5000/test");
      console.log(res);
      setTester(res.data);
      return res;
    }
    catch(error){
      console.log(error.response.data.message);
    }
  }
  return (
    <>
      <button onClick={testing}>hi</button>
      <p>{tester}</p>
    </>
  )
}

export default Tester;
