import React from 'react'
import Navbar from './Navbar'

const DeleteTeacher = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
        <h1 align="center">DELETE TEACHER</h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Teacher Id</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Delete</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteTeacher