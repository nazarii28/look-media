import React, {useEffect} from 'react';
import Button from "../UI/Button";
import classes from './AccountSettings.module.sass'
import {useFormik} from "formik";

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'First name is required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const formFields = [
  'firstName',
  'lastName',
  'email',
  'city',
  'country',
  'company'
]

const AccountSettings = ({user, onSubmit}) => {

  const formik = useFormik({
    initialValues: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName || '',
      city: user.city || '',
      country: user.country || '',
      company: user.company || '',
    },
    validate,
    onSubmit: values => {
      onSubmit(values)
    },
  });

  return (
    <div className={classes.AccountSettings}>
      <p className="subtitle">Edit information</p>
      <div className={classes.inputs}>
        {
          formFields.map((el, idx) => (
            <label key={el}>
              {el}
              <input
                id={el}
                name={el}
                onChange={formik.handleChange} value={formik.values[el]} type="text"/>
              {formik.errors[el] ? <div className={classes.errorMessage}>{formik.errors[el]}</div> : null}
            </label>
          ))
        }
      </div>
      <Button onClick={formik.handleSubmit}>Save Changes</Button>
    </div>
  );
};

export default AccountSettings;