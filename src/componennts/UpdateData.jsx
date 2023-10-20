import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateData = () => {

    const [updateData, setUpdateData] = useState({ name: "", email: "", mobile: "", password: "", gender: "" })

    const { id } = useParams()
    const navigate = useNavigate()

    


    useEffect(() => {
        axios.get(`https://65266b56917d673fd76c37e8.mockapi.io/crudusers/${id}`).then((res) => {
            setUpdateData({
                ...updateData, name: res.data.name,
                email: res.data.email,
                mobile: res.data.mobile,
                password: res.data.password,
                gender: res.data.gender

            })
        }).catch(() => {

        })
    }, [])

    const handleUpadte = (e) => {
        e.preventDefault()
        axios.put(`https://65266b56917d673fd76c37e8.mockapi.io/crudusers/${id}`, updateData).then((res) => {
            navigate('/userdata')
            toast.success("Update Data SuccessFully")
        }).catch(() => {
            toast.error(error.message)
        })

    }
    return (
        <>

            <div className='container mt-2 col-5 border rounded-2 p-4 bg-secondary-subtle'>
                <h2 className='text-center text-primary'>Update Data</h2>
                <hr />
                <form >

                    <div className="form-floating mb-3  ">
                        <input
                            type="text"
                            className="form-control " name="name" id="formId1" value={updateData.name}
                            onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })} />
                        {/* {errors.name && <p className='text-danger' >{errors.name}</p>} */}
                        <label for="formId1">Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control" name="email" id="formId1" value={updateData.email}
                            onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })} />
                        {/* {errors.email && <p className='text-danger' >{errors.email}</p>} */}

                        <label for="formId1">Email</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            className="form-control" name="email" id="formId1" value={updateData.mobile}
                            onChange={(e) => setUpdateData({ ...updateData, mobile: e.target.value })} />
                        {/* {errors.mobile && <p className='text-danger' >{errors.mobile}</p>} */}

                        <label for="formId1">Mobile</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control" name="password" id="formId1" value={updateData.password}
                            onChange={(e) => setUpdateData({ ...updateData, password: e.target.value })} />
                        {/* {errors.password && <p className='text-danger' >{errors.password}</p>} */}

                        <label for="formId1">Password</label>
                    </div>





                    <label className="form-check-label pe-2" for="">
                        Gender :-
                    </label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male"
                            checked={updateData.gender === "male"}
                            onChange={(e) => setUpdateData({ ...updateData, gender: e.target.value })} />
                        <label className="form-check-label" for="inlineRadio1">Male</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" value="female"
                            checked={updateData.gender === "female"}
                            onChange={(e) => setUpdateData({ ...updateData, gender: e.target.value })}
                        />

                        <label className="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                    {/* {errors.gender && <p className='text-danger' >{errors.gender}</p>} */}




                    <div className="d-grid gap-2 mt-3">
                        <button type="button" name="" id="" className="btn btn-success" onClick={handleUpadte} >Update Data</button>
                    </div>
                </form>
            </div>


        </>
    )
}

export default UpdateData
