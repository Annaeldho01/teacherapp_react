import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewTeacher = () => {
    const[data,changeData]=useState(
        [
           {"Name":"Anu","mobileno":987654321,"email":"anu@gmail.com"},
           {"Name":"Ann","mobileno":987654322,"email":"ann@gmail.com"},
           {"Name":"Ashtami","mobileno":987624321,"email":"ashtami@gmail.com"},
           {"Name":"Ardra","mobileno":987644321,"email":"ardra@gmail.com"},
           {"Name":"Sand","mobileno":987652321,"email":"sand@gmail.com"},
           {"Name":"Sangeeth","mobileno":917654321,"email":"sangeeth@gmail.com"}
        ]
    )
  return (

    <div>
        <Navbar/>
        <h1 align="center">VIEW TEACHER</h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              
                <table className="table table-striped">
                    <thead>
                        <tr>
                          
                          <th scope="col">TEACHER NAME</th>
                          <th scope="col">MOBILE NO</th>
                          <th scope="col">EMAIL ID</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map(
                            (value,index)=>{
                                return<tr>
                          <td>{value.Name}</td>
                          <td>{value.mobileno}</td>
                          <td>{value.email}</td>
                        </tr>
                            }
                        )}
                        
                      </tbody>
                  

                </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewTeacher