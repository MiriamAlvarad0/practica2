import React from 'react';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
  // Validaciones básicas
  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.role) {
      errors.role = 'Role is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  // Inicializamos Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      console.log('Form values:', values);
    },
  });

  return (
    <div>
      <div><h1>Register page</h1></div>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            isInvalid={formik.touched.name && formik.errors.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="invalid-feedback">{formik.errors.name}</div>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            isInvalid={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-feedback">{formik.errors.email}</div>
          ) : null}
        </Form.Group>

        <Form.Label>Role</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="role"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.role}
          isInvalid={formik.touched.role && formik.errors.role}
        >
          <option value="">Select Role</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        {formik.touched.role && formik.errors.role ? (
          <div className="invalid-feedback">{formik.errors.role}</div>
        ) : null}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isInvalid={formik.touched.password && formik.errors.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="invalid-feedback">{formik.errors.password}</div>
          ) : null}
        </Form.Group>

        
        
        

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
