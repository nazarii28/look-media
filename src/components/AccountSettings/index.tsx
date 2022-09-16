import {User} from '../../types'
import Button from "../UI/Button";
import classes from './AccountSettings.module.sass'
import {FormikErrors, useFormik} from "formik";

export interface IAccountSettingsFormValues {
    email: string | null,
    firstName: string | null,
    lastName: string,
    city: string,
    country: string,
    company: string,
}

const validate = (values: IAccountSettingsFormValues) => {
    const errors: FormikErrors<IAccountSettingsFormValues> = {};

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

interface IAccountSettingsProps {
    user: User,
    onSubmit: (values: IAccountSettingsFormValues) => void
}

const AccountSettings = ({user, onSubmit}: IAccountSettingsProps) => {

    const initialValues: IAccountSettingsFormValues = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName || '',
        city: user.city || '',
        country: user.country || '',
        company: user.company || '',
    }
    const formik = useFormik({
        initialValues,
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