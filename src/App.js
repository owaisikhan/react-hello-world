import React from 'react'
import Student from './Student'
import Courses from './Courses'
function App(){
    return (
        <React.Fragment>
            <h1>Hello world!</h1>
            <Student Name="Owais Khan" Org="UET Peshawar" Deptt="Electrical" Year="Final Year"  City="Peshawar"/>
            <Student Name="Yasin" Org="UET Peshawar" Deptt="Electrical" Year="Final Year" City="Jalozai"/>
            <Student Name="Usman" Org="UET Peshawar" Deptt="Electrical" Year="Final Year" City="Kamra"/>
            <hr/>
            <h1>Courses</h1>
            <Courses title="Control Systems" chr={3}/>
            <Courses title="Wireless Communication" chr={3}/>
            <Courses title="Digital Communication" chr={3}/>
        </React.Fragment>
    )
}

export default App;