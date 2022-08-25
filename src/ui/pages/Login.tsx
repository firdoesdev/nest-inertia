import { Inertia } from '@inertiajs/inertia';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useForm } from '@inertiajs/inertia-react';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, {FC} from 'react';

const Login: FC = () => {
    const {
        data,
        setData,
        post,
        processing,
        errors
    } = useForm({
        email: '',
        password: '',
    })

    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setData({...data, [name]: value})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // event.preventDefault()
        console.log(data.email)
        console.log(data.password)
        post('/verified')
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                }}
            >
                <Form
                    name="login"
                    onFinish={handleSubmit}
                    style={{minWidth: "300px"}}
                >
                    <Form.Item
                        name="email"
                        rules={[{required: true, message: 'Please input your email!'}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" id='email' name='email' type="text" value={data.email} onChange={handleChanges}/>
                        {/* {errors.email && <div>{errors.email}</div>} */}
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" id='password' name='password' value={data.password} onChange={handleChanges}/>
                        {/* {errors.password && <div>{errors.password}</div>} */}
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={processing} style={{width: "100%"}}>Login</Button>
                        <p style={{textAlign: 'center'}}>or <Link href={'/register'}>Register now!</Link></p> 
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    );
};

export default Login;