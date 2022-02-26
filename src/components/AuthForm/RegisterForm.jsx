import classes from './AuthForm.module.sass'
import React from "react";

import { useFormik } from 'formik';
import classNames from "classnames";

import Button from "../UI/Button";

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters or  more';
    }

    return errors;
};

const formFields = [
    {
        type: 'text',
        name: 'name',
        placeholder: "name"
    },
    {
        type: 'email',
        name: 'email',
        placeholder: "email"
    },
    {
        type: 'password',
        name: 'password',
        placeholder: "Password"
    },
]

const RegisterForm = ({onSubmit}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            onSubmit(values)
        },
    });

    return (
      <div className={classes.form}>
          <h2 className="text-3xl text-white font-medium text-center mb-8">Register</h2>
          <form onSubmit={formik.handleSubmit}>
              {
                  formFields.map((el) => {
                      return (
                        <React.Fragment key={el.name}>
                            <input
                              id={el.name}
                              name={el.name}
                              type={el.type}
                              onChange={formik.handleChange}
                              value={formik.values[el.name]}
                              placeholder={el.placeholder}
                            />
                            {formik.errors[el.name] ? <div className={classes.errorMessage}>{formik.errors[el.name]}</div> : null}
                        </React.Fragment>
                      )
                  })
              }
              <Button className={'w-full mt-6'} type="submit">Register</Button>
          </form>
      </div>
    );
}

export default RegisterForm