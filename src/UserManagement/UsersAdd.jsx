import React from 'react';
import { useRef } from 'react';


export default function UsersAdd({ onAddUser, currentId }) {
   
    
    const fullName = useRef('');
    const Country = useRef('');

    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fullName.current.value || !Country.current.value) {
         alert("Please fill in all fields!");
           return;
    }
       
     onAddUser({
        payload : {
            id : currentId + 1,
            fullname : fullName.current.value,
            country : Country.current.value
        }
     })   

     fullName.current.value = '';
     Country.current.value = '';

        
    }
    
    return (
        <form className="form-group" onSubmit={handleSubmit}>

            <label htmlFor="id">Current ID</label>
            <input type="text" id="id" className="form-control" readOnly value={currentId + 1} />
            
            <div className="form-group">
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" className="form-control" ref={fullName} />
            </div>
            
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <select id="country" className="form-control" name="country" ref={Country}>
                <option value=""  >select Your Contry</option>
                <option value="Morocco">Morocco</option>
                <option value="Palestine"> Palestine</option>
                <option value="Tunesie">Tunesie</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary mt-4">Add</button>
        </form>
    );
};
