import React from 'react';
import Nav from './Nav';
import './style.css'

function Student(){
    return(
<>
<Nav/>
<h1>Student Detail</h1>
<button className='btn'>Add New Student</button>
<div className='data'>
<table className='table'>
    <tbody>
    <tr className='tablerows'>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
        <th>Batch</th>
        <th>Change</th>
    </tr>

    <tr className='tablerows'>
        <td>EA19</td>
        <td>19</td>
        <td>PrepBytes</td>
        <td>Nov</td>
        <td>Edit</td>
    </tr>

    <tr className='tablerows'>
        <td>EA19</td>
        <td>19</td>
        <td>PrepBytes</td>
        <td>Nov</td>
        <td>Edit</td>
    </tr>

    <tr className='tablerows'> 
        <td>EA19</td>
        <td>19</td>
        <td>PrepBytes</td>
        <td>Nov</td>
        <td>Edit</td>
    </tr>

    <tr className='tablerows'>
        <td>EA19</td>
        <td>19</td>
        <td>PrepBytes</td>
        <td>Nov</td>
        <td>Edit</td>
    </tr>
    </tbody>
  
</table>
</div>
</>
)

}


export default Student;