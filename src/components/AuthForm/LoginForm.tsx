import React from "react";
import classes from './AuthForm.module.sass'

import {FormikErrors, useFormik} from 'formik';

import Button from "../UI/Button";


export interface ILoginFormValues {
  email: string,
  password: string,
}

const validate = (values: ILoginFormValues) => {
  const errors: FormikErrors<ILoginFormValues> = {};

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

const initialValues: ILoginFormValues = {
  email: '',
  password: '',
}

interface ILoginFormProps {
  onSubmit: (values: ILoginFormValues) => void
}

const LoginForm = ({onSubmit}: ILoginFormProps) => {

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: values => {
      onSubmit(values)
    },
  });

  return (
    <div className={classes.form}>
      <h2 className="text-3xl text-white font-medium text-center mb-8">Login</h2>
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
        <Button className={'w-full mt-6'} type="submit">Login</Button>
        <Button className={'w-full mt-6'}>Login with Google</Button>
      </form>
    </div>
  );
}

export default LoginForm