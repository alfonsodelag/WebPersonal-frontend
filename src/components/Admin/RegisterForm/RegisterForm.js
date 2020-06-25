import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';


import './RegisterForm.scss';
import { UserOutlined } from '@ant-design/icons';
import {
    emailValidation,
    minLengthValidation
} from '../../../utils/formValidation';
import { signUpApi } from '../../../api/user';

export default function RegisterForm() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false
    });

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    })

    const changeForm = e => {
        if (e.target.name === "privacyPolicy") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            });
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        }
    };

    const inputValidation = e => {

        const { type, name } = e.target;

        if (type === "email") {
            setFormValid({
                ...formValid,
                [name]: emailValidation(e.target)
            });
        }

        if (type === "password") {
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(e.target, 6)
            })
        }

        if (type === 'checkbox') {
            setFormValid({
                ...formValid,
                [name]: e.target.checked
            })
        }
    }

    const register = async e => {
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;
        const privacyPolicyVal = inputs.privacyPolicy;

        if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
            notification["error"]({
                message: "All fields must be filled in."
            });
        } else {
            if (passwordVal !== repeatPasswordVal) {
                notification["error"]({
                    message: "Passwords must be the same."
                })
            } else {
                const result = await signUpApi(inputs);

                if (!result.ok) {
                    notification["error"]({
                        message: result.message
                    });
                } else {
                    notification["success"]({
                        message: result.message
                    });
                    resetForm();
                }
            }
        }
    };

    const resetForm = () => {
        const input = document.getElementsByTagName('input');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("success");
            inputs[i].classList.remove("error");
        }

        setInputs({
            email: "",
            password: "",
            repeatPassword: "",
            privacyPolicy: false
        });

        setFormValid({
            email: false,
            password: false,
            repeatPassword: false,
            privacyPolicy: false
        })
    }

    return (
        <Form className="register-form" onFinish={register} onChange={changeForm} >
            <Form.Item>
                <Input
                    prefix={<UserOutlined type="user" style={{ color: "gba(0,0,0, .25" }} />}
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<UserOutlined type="lock" style={{ color: "gba(0,0,0, .25" }} />}
                    type="password"
                    name="password"
                    placeholder="User password"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<UserOutlined type="lock" style={{ color: "gba(0,0,0, .25" }} />}
                    type="password"
                    name="repeatPassword"
                    placeholder="Repeat user password"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                    name="privacyPolicy"
                    onChange={inputValidation}
                    checked={inputs.privacyPolicy}>
                    I accept the Terms and Conditions.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button" >
                    Create Account
                </Button>
            </Form.Item>
        </Form>
    );
}