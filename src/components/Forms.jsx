import React, { useState } from 'react';
import NewForm from './NewForm';

export default function Forms(){
    const [name, setName]=useState({firstName: "", lastName: ""});

    function submitForm(e){
        e.preventDefault();
        console.log(name);
    }

    return(
        <div>
            {name.firstName} - {name.lastName}
            <form>
                <h1>Forms</h1>
                <input type="text" value={name.firstName} onChange={(e)=>setName({...name, firstName: e.target.value})} />
                <input type="text" value={name.lastName} onChange=   {(e)=>setName({...name, lastName: e.target.value})} />
                <button onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}

