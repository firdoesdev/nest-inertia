import React, { FC } from 'react';
import { useForm } from '@inertiajs/inertia-react'
import { Button, Form, Input } from 'antd';
import { FormValue } from './entity';

const RegisterForm: FC = () => {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const onFinish = (values: FormValue) => {
    post('/register');
  };

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
  };

  return (
    <Form
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      {...formItemLayout}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          },
        ]}
        initialValue={data.name}
      >
        <Input name="name" onChange={onChange} />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
        initialValue={data.email}
      >
        <Input name="email" onChange={onChange} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
        initialValue={data.password}
      >
        <Input.Password name="password" onChange={onChange} />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The two passwords that you entered do not match!'),
              );
            },
          }),
        ]}
        initialValue={data.password}
      >
        <Input.Password name="confirmPassword" onChange={onChange} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>

        <Button
          type="default"
          htmlType="button"
          className="register__login_btn"
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
