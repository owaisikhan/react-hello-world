import React from 'react'

function Student(props){
    return(
        <div>
        <p>I am {props.Name} from {props.Org}</p>
        <li>{props.Deptt}</li>
        <li>{props.Year}</li>
        <li>{props.City}</li>
        </div>

    )

}

export default Student;