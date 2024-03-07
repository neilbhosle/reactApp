import { useState } from "react";

export default function NewForm(){

    const [address, setAddress]=useState({city:"", state:""});

    function submitForm(e){
        e.preventDefault(); // to prevent the default behaviour of the form which is to refresh the page which causes the data to be lost
        console.log(address);
    }

    return(
        <div>

            <form>
                <h2>Address</h2>
                <input type="text" value={address.city} onChange={(e)=>setAddress({...address, city:e.target.value})} />
                <input type="text" value={address.state} onChange={(e)=>setAddress({...address,state:e.target.value})} />
                <button onClick={submitForm}>Submit</button>
  
            </form>        
        </div>
    )
}