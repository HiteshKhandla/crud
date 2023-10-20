import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiSolidUserX } from 'react-icons/bi'
import { FaUserEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserData = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get('https://65266b56917d673fd76c37e8.mockapi.io/crudusers').then((res) => {
      setUser(res.data)
    })
  }, [])


  const handleDelete = (id) => {
    axios.delete(`https://65266b56917d673fd76c37e8.mockapi.io/crudusers/${id}`).then(() => {
      toast.success("User Data Deleted ")
      toast.success("refresh")
    }).catch(() => {
      toast.error(error.message)
    })
  }


  return (
    <>
      <div className="table-responsive container mt-3">
        <h1>User Data</h1>
        <hr />

        <table className="table table-bordered border-secondary table-light">
          <thead>
            <tr>
              <th scope="col row">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Password</th>
              <th scope="col">Gender</th>
              <th scope="col">Actions</th>


            </tr>
          </thead>
          <tbody>
            {user.map((users, index) =>
              <tr key={index}>
                <td >{index + 1}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.mobile}</td>
                <td>{users.password}</td>
                <td>{users.gender}</td>
                <td>
                  <Link to={`/updatedata/${users.id}`}>
                    <button type="button" className="btn btn-success rounded-pill ms-2 me-2"
                    ><FaUserEdit size={25} /></button>
                  </Link>
                  <button type="button" className="btn btn-danger rounded-pill " onClick={() => handleDelete(users.id)}><BiSolidUserX size={25} /></button>

                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default UserData
