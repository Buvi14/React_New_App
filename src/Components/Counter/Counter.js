import React,{useState} from 'react'

export default function Counter() {

    const [state, setState] = useState(0);

    return (
        <div className="container mt-5">
            <h2 className="text-danger">Clicked me : {state}</h2>
            <button className="btn btn-primary" onClick={()=>{setState(state+1)}} >Click</button>
        </div>
    )
}
