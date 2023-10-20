import React, { useState } from 'react'

const Demo = () => {
    const [form, setform] = useState({ name: "", email: "", password: "", cpassword: "" })
    const [errors, setErrors] = useState({});


    const validation = () => {
        const newError = {};
        if (!form.name) {
            newError.name = 'Name is required';
        }

        if (!form.email) {
            newError.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newError.email = 'Invalid email format';
        }

        if (!form.password) {
            newError.password = 'Password is required';
        }

        if (!form.cpassword) {
            newError.cpassword = 'Password is required';
        }

        if (form.cpassword !== form.password) {
            newError.cpassword = "Password Do not Match"
        }
        setErrors(newError);
        return Object.keys(newError).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validation()) {
            // Submit the data to the JSON server
            try {
                const response = await fetch('http://localhost:8181/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form),
                });
                if (response.ok) {
                    // Data was successfully added to the server
                    setform({ name: '', email: '', password: '', cpassword: '' });
                    setErrors({});
                } else {
                    console.error('Failed to add data to the server.');
                }
            } catch (error) {
                console.error('Error: ', error);
            }
        }
    }
    return (
        <>
            <div className='container col-6 mt-2'>
                <h1>Register Form</h1>
                <hr />
                <form onSubmit={handleSubmit} >
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control" name="name" id="formId1" placeholder="" value={form.name}
                            onChange={(e) => setform({ ...form, name: e.target.value })} />
                        {errors.name && <div className="error">{errors.name}</div>}

                        <label for="formId1">Name</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control" name="email" id="formId1" placeholder="" value={form.email}
                            onChange={(e) => setform({ ...form, email: e.target.value })} />
                        {errors.email && <div className="error">{errors.email}</div>}

                        <label for="formId1">Email</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input
                            type="password"
                            class="form-control" name="password" id="formId1" placeholder="" value={form.password} onChange={(e) => setform({ ...form, password: e.target.value })} />
                        {errors.password && <div className="error">{errors.password}</div>}

                        <label for="formId1">password</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input
                            type="password"
                            class="form-control" name="cpassword" id="formId1" placeholder="" value={form.cpassword} onChange={(e) => setform({ ...form, cpassword: e.target.value })} />
                        {errors.cpassword && <div className="error">{errors.cpassword}</div>}

                        <label for="formId1">Confirm Password</label>
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" name="" id="" class="btn btn-success">Submit Form</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Demo
