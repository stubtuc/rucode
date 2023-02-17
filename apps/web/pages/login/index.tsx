import React from "react";
import 'ui/styles.css';
import useForm, { ValidationObj } from "hooks/useForm";
import { Button } from "ui";
import { useMutation } from "@apollo/client";
import { login } from "@/api/services/auth/auth.service";
import { PROFILE, movePage } from "@/routes";
import {setCookie} from "typescript-cookie";

const validation: ValidationObj = {
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

const Login = () => {
    const {formData, setFormData, errors, completed} = useForm({
        email: '',
        password: '',
    }, validation);

    const [signIn] = useMutation(login, {
        variables: {
            user: {
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
                label="Sign in"
                disabled={errors.length > 0 || !completed}
                onClick={() => {
                    signIn().then((res) => {
                        const data = res.data;

                        if (data) {
                            const { access_token, id } = data.login;

                            setCookie('rucode_access_token', access_token, { expires: 1 });
                            setCookie('rucode_user_id', id, { expires: 1 });
                            movePage(PROFILE(id));
                        }
                    });
                }}
            />
        </form>
    )
}

export default Login;