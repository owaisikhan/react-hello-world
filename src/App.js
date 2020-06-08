import React from 'react'
import Student from './Student'

function App(){
    return (
        <React.Fragment>
            <h1>Hello world!</h1>
            <Student Name="Owais Khan" Org="UET Peshawar" Deptt="Electrical" Year="Final Year"  City="Peshawar"/>
            <Student Name="Yasin" Org="UET Peshawar" Deptt="Electrical" Year="Final Year" City="Jalozai"/>
            <Student Name="Usman" Org="UET Peshawar" Deptt="Electrical" Year="Final Year" City="Kamra"/>
        </React.Fragment>
    )
}

export default App;