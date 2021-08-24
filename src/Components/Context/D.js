import React,{useContext} from 'react'
import post_data_context from './Context'




export default function D() {
    const my_context_data = useContext(post_data_context);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {
                        my_context_data.map((data)=>{
                            return(
                                <div className="card mt-4" key={data.id}>
                                    <div className="card-header bg-secondary">
                                        {data.title}
                                    </div>
                                    <div className="card-body">
                                        {data.body}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
