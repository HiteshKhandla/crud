import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {

  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "", cpassword: "", gender: "", check: "" })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   if (validation()) {
  //     // Submit the data to the JSON server
  //     try {
  //       const response = await fetch('https://65266b56917d673fd76c37e8.mockapi.io/crudusers', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(form),
  //       });
  //       if (response.ok) {
  //         toast.success("Register Successfully")
  //         // Data was successfully added to the server
  //         setForm({ name: '', email: '', password: '', cpassword: '', mobile: "", gender: "", check: "" });
  //         setErrors({});
  //         navigate("/userdata")
  //       } else {
  //         toast.error(errors.message)

  //       }
  //     } catch (error) {
  //       console.error('Error: ', error);
  //     }
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validation()) {
      axios.post('https://65266b56917d673fd76c37e8.mockapi.io/crudusers', form).then((res) => {
        navigate("/userdata")
        toast.success("Register SuccessFully")
      }).catch(() => {
        toast.error(errors.message)
      })



    }
  }






  const validation = () => {
    const newError = {};

    // name
    if (!form.name) {
      newError.name = "Name Is Required"
    }

    // email

    if (!form.email) {
      newError.email = "Email Is Required"
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newError.email = 'Invalid email format';
    }

    // mobile 
    if (!form.mobile) {
      newError.mobile = "Mobile is Required"
    }

    // password
    if (!form.password) {
      newError.password = "Password is Required"
    } else if (form.password.length < 4) {
      newError.password = "Password Must Have 4 Character"
    }

    // confirm password
    if (!form.cpassword) {
      newError.cpassword = "Confirm Password is Required"
    } else if (form.password !== form.cpassword) {
      newError.cpassword = "Password  is Do Not Match"

    }

    // gender 
    if (!form.gender) {
      newError.gender = "Gender is Required"
    }

    if (!form.check) {
      newError.check = "Term and condition Required"
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  }

  return (
    <>

      <div className='container mt-2 col-5 border rounded-2 p-4 bg-secondary-subtle'>
        <h2 className='text-center text-primary'>Register Form</h2>
        <hr />
        <form >

          <div className="form-floating mb-3  ">
            <input
              type="text"
              className="form-control " name="name" id="formId1" placeholder="" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} />
            {errors.name && <p className='text-danger' >{errors.name}</p>}
            <label for="formId1">Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control" name="email" id="formId1" placeholder="" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} />
            {errors.email && <p className='text-danger' >{errors.email}</p>}

            <label for="formId1">Email</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control" name="email" id="formId1" placeholder="" value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
            {errors.mobile && <p className='text-danger' >{errors.mobile}</p>}

            <label for="formId1">Mobile</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control" name="password" id="formId1" placeholder="" value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })} />
            {errors.password && <p className='text-danger' >{errors.password}</p>}

            <label for="formId1">Password</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control" name="cpassword" id="formId1" placeholder="" value={form.cpassword}
              onChange={(e) => setForm({ ...form, cpassword: e.target.value })} />
            {errors.cpassword && <p className='text-danger' >{errors.cpassword}</p>}

            <label for="formId1">Confirm Password</label>
          </div>



          <label className="form-check-label pe-2" for="">
            Gender :-
          </label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male"
              checked={form.gender === "male"}
              onChange={(e) => setForm({ ...form, gender: e.target.value })} />
            <label className="form-check-label" for="inlineRadio1">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" value="female"
              checked={form.gender === "female"}

              onChange={(e) => setForm({ ...form, gender: e.target.value })} />

            <label className="form-check-label" for="inlineRadio2">Female</label>
          </div>
          {errors.gender && <p className='text-danger' >{errors.gender}</p>}



          <div className="form-check mt-2">
            <input className="form-check-input" type="checkbox" checked={form.check} id=""
              onChange={(e) => setForm({ ...form, check: e.target.value })} />
            <label className="form-check-label" for="">
              Accept Terms And Condition
            </label>
          </div>
          {errors.check && <p className='text-danger' >{errors.check}</p>}

          <div className="d-grid gap-2 mt-3">
            <button type="button" name="" id="" className="btn btn-success" onClick={handleSubmit}>Submit Form</button>
          </div>
        </form>
      </div>


    </>
  )
}

export default Register
