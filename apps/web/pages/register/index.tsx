import React from "react";
import 'ui/styles.css';
import useForm, { ValidationObj } from "hooks/useForm";
import { Button } from "ui";
import { useMutation } from "@apollo/client";
import { register } from "@/api/services/auth/auth.service";
import Link from "next/link";
import { LOGIN, movePage } from "@/routes";

const validation: ValidationObj = {
    username: [
        {
            validator: (value) => !!value.match(/^[a-z]{5,16}$/g),
            message: 'Username must be longer than 4 and not more than 16 characters',
        },
        {
            validator: (value) => !value.match(/[0-9]/g),
            message: 'Username must not contain numbers',
        },
    ],
    email: [
        {
            validator: (value) => !!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
            message: 'Please enter correct email address'
        }
    ],
    password: [
        {
            validator: (value) => !!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
            message: 'Password should contain at least one digit, one lower case and one upper case. Minimum password length 8.',
        }
    ]
}

const Register = () => {
    const {formData, setFormData, errors, completed} = useForm({
        username: '',
        email: '',
        password: '',
    }, validation);

    const [signUp] = useMutation(register, {
        variables: {
            user: {
                name: formData.username.value,
                email: formData.email.value,
                password: formData.password.value
            }
        }
    });

    return (
        <form>
            {Object.keys(formData).map((key) => (
                    <div className="form-field" key={key}>
                        <label htmlFor={key} className="field-label">{ key }</label>
                        <input
                            type={key}
                            value={formData[key].value}
                            onChange={(e) => {
                                setFormData({ ...formData, [key]: { ...formData[key], value: e.target.value } });
                            }}
                        />
                        { formData[key].errors.map((error) => <label key={error} className="error-label">{ error }</label>) }
                    </div>
                ))}
            <Button
                label="Sign up"
                disabled={errors.length > 0 || !completed}
                onClick={() => {
                    signUp().then((res) => {
                        if (res.data) {
                            movePage(LOGIN);
                        }
                    });
                }}
            />
            <div className="form-footer">
                <p>Have an account?</p>
                <Link {...LOGIN}>Sign in</Link>
            </div>
        </form>
    )
}

export default Register;