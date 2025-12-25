import { useEffect, useReducer, useRef, useState } from "react"
import { type } from "@testing-library/user-event/dist/type"
import { FORM_REDUCER_DEFAULT_VALUES, FormReducer } from "./FormReducer"

export default function Form(){
    
    const inputNameRef = useRef("")        
    const inputCityRef = useRef("")
    const inputDateRef = useRef("")
    const inputCounRef = useRef("")
    const inputAcceptRef = useRef("")

    const [formValuesWithReducer , dispatch] = useReducer(FormReducer , FORM_REDUCER_DEFAULT_VALUES )      

    const hadleSubmit = (e) => {
        e.preventDefault()

        dispatch({                         
            type : "INPUT_CHANGE",
            payload : inputNameRef.current,
        })
        
         dispatch({
            type : "INPUT_CHANGE",
            payload : inputCityRef.current,
        })
        dispatch({
            type : "INPUT_CHANGE",
            payload : inputDateRef.current,
        })

        dispatch({
            type : "SELECT_CHANGE",
            payload : inputCounRef.current,
        })

        dispatch({
            type : "CHECKBOX_CHANGE",
            payload : inputAcceptRef.current,
        })

        const val = {name : inputNameRef.current.name , Country : inputCounRef.current.value }
        // console.log(inputCounRef.current.value)
        console.log(val)

        
    }

    useEffect(() => {
        inputNameRef.current.value = ""
        inputDateRef.current.value = new Date().toISOString().substring(0,10)       //toISOString() : كتحوّل التاريخ لوحد الصيغة (format) عالمية ومعروفة سميتها ISO 8601. // natija bhal haka "2025-11-11T14:23:45.123Z"
        inputCounRef.current.value ="TN"
        inputCityRef.current.focus()
    },[])

    
    

    return(
        <div className="container mt-4">
            <h3>Last update :</h3>
            <hr/>
            {new Date().toLocaleDateString()}
            <hr/>
            <h3>Values :</h3>
            {JSON.stringify(formValuesWithReducer)}
            <form>
                <div className="form-group mt-4">
                    <label>Name :</label>
                    <input type="text" name="name" className="form-control" ref={inputNameRef}/>    
                </div>

                <div className="form-group">
                    <label>City :</label>
                    <input type="text" name="city"  className="form-control" ref={inputCityRef}/>
                </div>

                <div className="form-group">
                    <label>Date :</label>
                    <input type="date" name="Date" className="form-control" ref={inputDateRef}/>
                </div>

                <div className="form-group">
                    <label>Country :</label>
                    <select name="country" className="form-select" ref={inputCounRef}>
                        <option value="MA">Maroc</option>
                        <option value="DZ">Algérie</option>
                        <option value="TN">Tunisie</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>

                <div className="form-check mt-3">
                    <input type="checkbox" name="accept" className="form-check-input"  ref={inputAcceptRef}/>
                    <label htmlFor="accept" className="form-check-label">Accept our rules </label>
                </div>

                <div className="form-group mt-3">
                    <button className="btn btn-primary" onClick={hadleSubmit}>Save</button>
                </div>
                
            </form>
        </div>
    )
}